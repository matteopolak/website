---
title: 'Axum Design #1: Managing State'
description: Best practices and common patterns for managing state in Axum applications.
date: '2024-08-04'
tags:
  - rust
  - axum
published: false
---

This is the first part of a series of articles on best practices and common patterns when
creating a real-world web application with Axum. To skip to a specific section, use the links below:

1. [State management](/docs/axum-state-management)
1. [Error handling](/docs/axum-error-handling)
1. [Composing routes with `nest`](/docs/axum-composing-routes)
1. [Separating logic with `Extension`](/docs/axum-separating-logic)

[Axum](https://github.com/tokio-rs/axum) is a highly extensible web
framework for Rust with many ways to manage state.

- [`State`](https://docs.rs/axum/latest/axum/extract/struct.State.html) extractor
- [`Extension`](https://docs.rs/axum/latest/axum/struct.Extension.html)s

Before jumping into it, let's cover some of the basics needed to understand each approach.
If you don't care about this, [skip ahead to the first approach](#state-extractor).

## What is an extractor?

In Axum, an extractor is a type that implements the `FromRequestParts` or `FromRequest` trait, and is used
to extract information from an incoming request in a reusable way. Some examples:

`Json<T>` parses the request body as JSON and deserializes it into a value of type `T`.

```rust
async fn extract_json_body(Json(body): Json<MyStruct>) -> impl IntoResponse {

}
```

`HeaderMap` extracts the request headers.

```rust
async fn extract_headers(headers: HeaderMap) -> impl IntoResponse {

}
```

`State<T>` extracts a shared state from the application.

```rust
async fn extract_state(state: State<MyState>) -> impl IntoResponse {

}
```

## What is "state"?

In the context of web applications, "state" refers to any data that
is shared between multiple requests. This can be a database connection
pool, a cache, or any other kind of data that is used across multiple requests.

For each `Router<S>` in Axum, you can attach a single state object that
will be cloned for each request. This state can then be extracted in a
handler with the `State` extractor, as long as the inner type implements
`FromRef` for the state of the router.

## `State` extractor

The `State` extractor clones the router's state to be used in the current handler.

```rust
#[derive(Clone, Copy)]
struct MyState {
  counter: AtomicU32,
}

async fn handler(State(state): State<MyState>) -> impl IntoResponse {
  state.counter.fetch_add(1, Ordering::Relaxed);
  // ...
}

let app = Router::new()
  .route("/path", get(handler))
  .state(MyState {
    counter: AtomicU32::new(0),
  });
```

## `FromRef` trait

The `State` extractor can also be used to extract a portion of
the state by implementing `FromRef` for the field.

```rust
struct Counter(AtomicU32);

struct MyState {
  counter: Counter,
}

impl FromRef<MyState> for Counter {
  fn from_ref(state: &MyState) -> Self {
    state.counter
  }
}

async fn handler(State(Counter(counter)): State<Counter>) -> impl IntoResponse {
  counter.fetch_add(1, Ordering::Relaxed);
  // ...
}
```

This is especially useful for reducing the number of implicit dependencies in your handlers,
allowing better encapsulation and testability.

<script lang="ts">
	import Project from '../Project.svelte';
	import Tags from '../Tags.svelte';
	import InterpreterTag from '../tags/InterpreterTag.svelte';
	import RustTag from '../tags/RustTag.svelte';

	export let hash = 0;
</script>

<Project
	href="https://github.com/matteopolak/baerscript"
	src="https://opengraph.githubassets.com/{hash}/matteopolak/baerscript"
	alt="Preview of the GitHub repository matteopolak/baerscript"
	index={0}
>
	<div style="background-color: red;">
		<Tags>
			<RustTag />
			<InterpreterTag />
		</Tags>
		<p style="float: left; text-align: left; padding-left: 0.5em; width: 50%;">
			BaerScript is a interpreted programming language. It utilizes nine symbols
			in order to achieve turing complete-ness.
			<br /><br />
			It contains unit tests and code-formatting checks when new commits are pushed
			to GitHub.
		</p>
	</div>
</Project>

<template>
	<div>
		<div id="no-drop" class="drag-drop">#no-drop</div>
		<div id="yes-drop" class="drag-drop">#yes-drop</div>
		<div id="outer-dropzone" class="dropzone">
			#outer-dropzone  
			<div id="inner-dropzone" class="dropzone">
				#inner-dropzone
			</div>
		</div>
	</div>
</template>

<script>
import interact from 'interactjs';
export default {
	created() {
		interact('.dropzone').dropzone({
			accept: '#yes-drop',	// only accept elements matching this CSS selector
			overlap: 0.75,		// require a 75% element overlap for a drop to be possible
		
			// Listen for drop related events:
			ondropactivate: function(e) {
				e.target.classList.add('drop-active');
			},

			ondragenter: function(e) {
				var draggableElement = e.relatedTarget;
				var dropzoneElement = e.target;

				// feedback the possibility of a drop
				dropzoneElement.classList.add('drop-target');
				draggableElement.classList.add('can-drop');
				draggableElement.textContent = 'Dragged in';
			},

			ondragleave: function(e) {
				// remove drop feedback style
				e.target.classList.remove('drop-target');
				e.relatedTarget.classList.remove('can-drop');
				e.relatedTarget.textContent = 'Dragged out';
			},

			ondrop: function(e) {
				e.relatedTarget.textContent = 'Dropped'
			},

			ondropdeactivate: function(e) {
				e.target.classList.remove('drop-active');
				e.target.classList.remove('drop-target');
			}
		
		});

		interact('.drag-drop').draggable({
			inertia: false,
			modifiers: [	// keep the element within the area of its parent
				interact.modifiers.restrictRect({
					restriction: 'parent',
					endOnly: true
				})
			],
			autoScroll: true,
			onmove: dragMoveListener
		})

		function dragMoveListener (event) {
			var target = event.target
			// keep the dragged position in the data-x/data-y attributes
			var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
			var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

			// translate the element
			target.style.webkitTransform =
				target.style.transform =
					'translate(' + x + 'px, ' + y + 'px)'

			// update the posiion attributes
			target.setAttribute('data-x', x)
			target.setAttribute('data-y', y)
		}
	}
}
</script>

<style scoped>
	#outer-dropzone {
		height: 140px;
	}
	#inner-dropzone {
		height: 80px;
	}
	.dropzone {
		background-color: #ccc;
		border:dashed 4px transparent;
		border-radius: 4px;
		margin: 10px auto 30px;
		padding: 10px;
		width: 80%;
		transition: background-color .3s;
	}
	.drop-active {
		border-color: #aaa;
	}
	.drop-target {
		background-color: #29e;
		border-color: #fff;
		border-style: solid;
	}
	.drag-drop {
		display: inline-block;
		min-width: 40px;
		padding: 2em .5em;
		color: #fff;
		background-color: #29e;
		border: solid 2px #fff;

		touch-action: none;
		user-select: none;
		transform: translate(0px, 0px);
		transition: background-color .3s;
	}

	.drag-drop.can-drop {
		color: #000;
		background-color: #4e4;
	}
</style>

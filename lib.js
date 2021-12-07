
// Oh shit, react in 15 lines
function Comp(tag, {children, ...props} = {}) {
	let el = document.createElement(tag)
	Object.assign(el, props)

	return Render(children, el)
}

function Render(children, container) {
	if(children)
		if(Array.isArray(children)) children.forEach(child => Render(child, container))
		else container.append(children)

	return container
}

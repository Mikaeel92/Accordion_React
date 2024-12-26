const data = [{
    id: 1,
    question: 'Explain the Virtual DOM',
    answer: 'The Virtual DOM is an interesting concept; it’s a complex idea that boils down into a much simpler algorithm.',
},
{
    id: 2,
    question: 'Explain the standard JavaScript toolchain, transpilation',
    answer: 'The bleeding edge JavaScript toolchain can seem quite complex, and it’s very important to feel confident in the toolchain and to have a mental picture of how the pieces fit together.',
},
{
    id: 3,
    question: 'How would you create Higher Order Components (HOCs) in React?',
    answer: 'Higher Order Components (HOCs) are the coined term for a custom Component that accepts dynamically provided children. For example, let’s make <LazyLoad /> Component that takes child image tags as children, waits until the <LazyLoad /> Component is scrolled into view, and then loads the images they point to in the background (before rendering them to the DOM).' ,
},
{
    id: 4,
    question: 'What is the significance of keys in React?',
    answer: 'Keys in React are used to identify unique VDOM Elements with their corresponding data driving the UI; having them helps React optimize rendering by recycling existing DOM elements. Let’s look at an example to portray this.',
},
{
    id: 5,
    question: 'What is the significance of refs in React?',
    answer: 'Similarly to keys, refs are added as an attribute to a React.createElement() call, such as <li ref="someName"/>. The ref serves a different purpose, it provides us quick and simple access to the DOM Element represented by a React Element.',
}
]

export default data
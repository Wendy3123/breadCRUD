const React = require('react')
const Default = require('./layouts/default')

function Show({ bread }) {
    return (
        <Default title={bread.name}>
            <h3>{bread.name}</h3>
            <p>{bread.getBakedBy()}</p>
            <p>and it {
                bread.hasGluten
                    ? <span> does </span>
                    : <span> does NOT </span>
            }
                have gluten.
            </p>
            {/* <ul>
                {bread.ingredients.map((item) => {
                    return <li>{item}</li>
                })}

            </ul> */}
            <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>
            <img src={bread.image} alt={bread.name}></img>

            <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE" />
            </form>

            <li><a href='/breads'>Go Home</a></li>
        </Default>
    )
}

module.exports = Show
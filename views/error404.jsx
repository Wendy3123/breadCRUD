const React = require('react')
const Default = require('./layouts/default')

function error404(){
    return (
        <Default title='404 page'>
            <h1>404: PAGE NOT FOUND</h1>
            <p>Oops, sorry, we can't find this page!</p>
            <div>
                <img src='/images/404Page.png' alt='404 error picture'></img>
            </div>
        </Default>
    )
}
//hi
module.exports=error404 
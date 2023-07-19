const React = require('react')
const Default = require('./layouts/default')

function fourOhfour(){
    return (
        <Default title='404 page'>
            <h1>404: PAGE NOT FOUND</h1>
            <p>Oops, sorry, we can't find this page!</p>
            {/* <div>
                <img src='https://t4.ftcdn.net/jpg/03/88/63/83/360_F_388638369_wSBADhKfhiTx6Q5Pz1xfdpy6zotku1Sg.jpg' alt='404 error picture'></img>
            </div> */}
        </Default>
    )
}

module.exports=fourOhfour 
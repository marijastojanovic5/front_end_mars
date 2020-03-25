import React from "react"

class  PictureOfTheDay extends React.Component{
    state={
        picOfTheDay: {}
    }
    componentDidMount(){
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_APIKEY}`)
        .then(res=>res.json())
        .then(image=>{
            this.setState({
                picOfTheDay: image
            })
        })
    }
    render(){
        const { date, explanation, url, title } = this.state.picOfTheDay 
    return(

        <div className="weather-img">
        <div className="card-img">
        <div className="container-fluid img-card" >
        <div className="card-body">
        <img id="pic-day" src={url} alt="nasa"/>
        </div>
        <h5 className="card-title">{title}, {date}</h5>
        <p className="card-text">{explanation}</p>
        </div>
        </div>
        </div>
    
    )
    }
}
export default PictureOfTheDay
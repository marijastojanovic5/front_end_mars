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
      
        <div className="card" style={{width: 1000}}>
        <img className="card-img-top" src={url} alt="Card image"/>
        <div className="card-img-overlay">
        </div>
            <h5>{date}</h5>
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{explanation}</p>
       </div>
     
    )
    }
}
export default PictureOfTheDay
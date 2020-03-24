import React from 'react'

const About =()=>{
    return (
       <div className="pic container-fluid">
           <div className ="row">
               <div className ="col-lg-12">

         
<button className="btn btn-primary" data-target="#aboutModal" data-toggle="modal" id="login-btn"> Read More
</button>

<div className="modal fade"  tabIndex="-1" id="aboutModal" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" 
        data-keyboard="false" data-backdrop="static">
  <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" >About Mars</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      Mars is the fourth planet from the Sun and orbits the Sun
               at an average distance of approximately 141 million miles 
               (225 million km). Mars rotates on its axis, completing one
               revolution every 24.6 hours. The axis of Mars is tilted at
               25 degrees and 12 minutes relative to its orbital plane 
               about the Sun. This produces seasons on the surface of Mars, 
               similar to the seasons on Earth. Mars completes one orbital 
               revolution around the Sun every 1.88 Earth years. Two small 
               natural satellites, Demos and Phobos, orbit
               Mars. Mars has no magnetic field to protect the surface 
               from radiation from the Sun.
               Many of the features on the surface of Mars resemble features 
               on the Earth; there are great dusty plains, there are large 
               volcanoes, and there is a large rift valley along the equator.
               Similar to the Earth, Mars has ice caps at the poles which grow 
               and shrink with the seasons. There are surface features which 
               suggest that liquid water once flowed across the surface of Mars, 
               but there are no current lakes or rivers of liquid water on the
               surface. As on Earth, water or water ice may be present underground.
               The mass of Mars is approximately 7.1 x 10^20 tons (6.4 x 10^23 kg or .11 x Earth mass). 
               The mean diameter of Mars is 4,217 miles (6,785 km or .53 x Earth diameter).
               The resulting surface gravitational acceleration (gmr) is given by:

                    <b>gmr = 12.1 ft/sec^2 = 3.7 m/sec^2 = .37 Earth gravity</b><br/>

                Mars has a thin atmosphere composed almost entirely of carbon dioxide.
                As on Earth, the atmosphere is in constant motion and large dust 
                storms have been observed from orbit. The recent Martian rovers 
                photographed multiple dust devils passing the craft on the surface.
                The thin atmosphere provides little shielding from radiation 
                from the Sun. Temperature extremes on the surface of Mars range 
                from -200 degrees to 32 degrees F. The atmosphere will cause
                aerodynamic drag on a rocket launched from the surface going into 
                orbit around Mars. The atmosphere also provides a means for slowing
                    spacecraft as they land on the surface. All of the spacecraft that
                    have landed on Mars have used parachutes during part of their 
                    descent through the atmosphere. The pressure, temperature, and 
                    density of the atmosphere all decrease with altitude above the 
                    Martian surface.

The robotic exploration of Mars began in the mid 1960's with the Mariner 
series of spacecraft. The early Mariner's took detailed pictures and 
measurements of the planet as the spacecraft flew past. Mariner 9 was
 the first spacecraft to go into a permanent orbit around Mars. The two 
 Viking spacecraft went into Martian orbit in the mid-1970's and each 
 sent a soft lander down to the planet's surface. A series of orbiting 
 and landing spacecraft have been sent to Mars since the 1980's. 
       
      </div>
    </div>
  </div>
</div>
       
</div>
</div>
       </div>     
 )
}
export default About
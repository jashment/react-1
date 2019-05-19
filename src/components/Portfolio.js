import React, {Component} from 'react';

class Portfolio extends Component {
    render() {
        if(this.props.data) {
            var portfolio = this.props.data.projects.map(function(project) {
                var imageUrl = 'images/portfolio/' + project.image
                return <div className="columns portfolio-item">
                <div className="item-wrap">

                   <a href={project.modal} title="">
                      <img alt="" src={imageUrl} />
                      <div className="overlay">
                         <div className="portfolio-item-meta">
                                  <h5>{project.title}</h5>
                            <p>{project.category}</p>
                               </div>
                      </div>
                   </a>

                </div>
                </div> 
            })
        }
        return (
            <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>


            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">

          	   {portfolio}

            </div> 

         </div> 






		      <img className="scale-with-grid" src="images/portfolio/modals/m-retrocam.jpg" alt="" />

		      <div className="description-box">
			      <h4>Retrocam</h4>
			      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
               <span className="categories"><i className="fa fa-tag"></i>Webdesign, Photography</span>
		      </div>

            <div className="link-box">
               <a href="http://www.behance.net">Details</a>
		         <a className="popup-modal-dismiss">Close</a>
            </div>

	      </div>


      

   </section>
        );
    }
}


export default Portfolio;

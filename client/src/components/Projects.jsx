import  React from 'react';
import './Projects.css';
import profile from '../assets/profile.jpg';


function ProjectsData() {

    const [data, setData] = React.useState();
    //database import
    React.useEffect(() => {
        fetch("/api").then(async (res) => res.json())
        .then((data)=> setData(data))
        .then(console.log(data));
      },[data]
      );   

    return(
        
        
    <div className='projects-container'>
        <div className='row'>
            
            <div className='row-child' id='row-child1'>
                <div className='name'>
                    <p></p>
                    <p>{!data ? " Loading..." : data[0].project}</p>
                </div>
                
                <div className='projects'>
                    <div className="columns">
                    <div className='list1'>
                        <h3>{!data ? " Loading..." : data[0].projectType}</h3>
                        <h3> <span className='subtitle'>with</span>
                        {!data ? " Loading..." : data[0].subtitle}</h3>
                        <p>{!data ? " Loading..." : data[0].desc1}
                             </p>
                            <h3>
                            {!data ? " Loading..." : data[0].subtitle2}
                                </h3><br /> 
                            <p className='second'>
                            {!data ? " Loading..." : data[0].desc2}
                            </p>
                        </div>
                        </div>
                        <div className="columns">
                        <div className='list2'>
                        <h2>
                        {!data ? " Loading..." : data[0].projectDesign}
                            </h2>
                        <li className='design'><p>
                        {!data ? " Loading..." : data[0].desc3a}
                            
                            </p></li>
                            <li className='design'><p>
                            {!data ? " Loading..." : data[0].desc3b}
                            </p></li>
                            <li className='design'> 
                            <h2> Enjoy!!</h2>
                            </li>
                        <li className='react-button'><a href='https://github.com/codewithwest/west-dynamics.git'>
                            {!data ? " Loading..." : data[0].link}
                            </a></li>
                        </div>
                        </div>

                    <div className='column3'>
                    <div className="list3">
                        <ul>
                         <li><img className="img" src={profile} alt="" /></li>
                        <li><img className="img" src={profile}  alt="" /></li>
                        <li><img className="img" src={profile}  alt="" /></li>
                        <li><img className="img" src={profile}  alt="" /></li>
                        
                        </ul>
                    </div>
                 </div>

                </div>        
            </div>

            <div className='row-child' id='row-child2'>
                    <div className='name'>
                        <p>{!data ? " Loading..." : data[1].project}</p>
                    </div>
                    
                    <div className='projects'>
                        <div className="columns">
                        <div className='list1'>
                            <h3>{!data ? " Loading..." : data[1].projectType}</h3>
                            <h3> <span className='subtitle'>with a touch of </span>
                            {!data ? " Loading..." : data[1].subtitle}
                            </h3>
                            <p>{!data ? " Loading..." : data[1].desc1}
                               
                            </p>
                                <h3>{!data ? " Loading..." : data[1].subtitle2}
                                    </h3><br /> 
                                <p className='second'>
                                {!data ? " Loading..." : data[1].desc2}
                                   
                                </p>
                            </div>
                            </div>
                            <div className="columns">
                            <div className='list2'>
                            <h2>{!data ? " Loading..." : data[1].projectDesign}
                                </h2>
                            <li className='design'><p>
                                {!data ? " Loading..." : data[1].desc3a}
                                
                                </p></li>
                                <li className='design'><p>
                                    {!data ? " Loading..." : data[1].desc3a}
                                
                                </p></li>
                                <li className='design'> 
                                <h2> Enjoy!!</h2>
                                </li>
                            <li className='react-button'>
                                <a href='https://westdynamics.tech'>
                                {!data ? " Loading..." : data[0].link}
                                   
                                    </a></li>
                            
                            </div>
                            </div>

                        <div className='column3'>
                        <div className="list3">
                            <ul>
                            <li><img className="img" src={profile} alt="" /></li>
                            <li><img className="img" src={profile}  alt="" /></li>
                            <li><img className="img" src={profile}  alt="" /></li>
                            <li><img className="img" src={profile}  alt="" /></li>
                            
                            </ul>
                        </div>
                    </div>

                    </div>        
            </div>               
         
            <div className='row-child' id='row-child3'>
            <div className='name'>
                <p>{!data ? " Loading..." : data[2].project}
                     </p>
            </div>
            
            <div className='projects'>
                <div className="columns">
                <div className='list1'>
                <h3>{!data ? " Loading..." : data[2].projectType}
                    </h3>
                    <h3> <span className='subtitle'>with</span>{!data ? " Loading..." : data[1].subtitle}
                     </h3>
                    <p>{!data ? " Loading..." : data[2].desc1}
                         </p>
                        <h3>{!data ? " Loading..." : data[2].subtitle2}
                            </h3><br /> 
                        <p className='second'>{!data ? " Loading..." : data[2].desc2}
                         
                        </p>
                    </div>
                    </div>
                    <div className='column3'>
                <div className="list3">
                    
                <ul>
                        <li><img className="img" src={profile} alt="" /></li>
                    <li><img className="img" src={profile}  alt="" /></li>
                    <li><img className="img" src={profile}  alt="" /></li>
                    <li><img className="img" src={profile}  alt="" /></li>
                    <li><img className="img" src={profile} alt="" /></li>
                    <li><img className="img" src={profile}  alt="" /></li>
                    
                    </ul>
                </div>
                </div>
                    <div className="columns">
                    <div className='list2'>
                    <h2>{!data ? " Loading..." : data[2].projectDesign}
                        </h2>
                    <li className='design'><p>
                    {!data ? " Loading..." : data[2].desc3a}
                      

                        </p></li>
                        <li className='design'><p>{!data ? " Loading..." : data[2].desc3b}
                            
                        </p></li>
                        <li className='design'> 
                        <h2> Enjoy!!</h2>
                        </li>
                    <li className='react-button'><a href='https://github.com/codewithwest/west-dynamics.git'>
                    {!data ? " Loading..." : data[2].link}
                       </a></li>
                    
                    
                    </div>
                    </div>

                

            </div>
            

                
            </div>
            
            <div className='row-child' id='row-child3'>
            
            
            <div className='projects'>
                <div className="columns">
                <div className='list1'>
                <h3>{!data ? " Loading..." : data[3].projectType}
                    </h3>
                    <h3> <span className='subtitle'>with </span> 
                    {!data ? " Loading..." : data[3].subtitle}
                    </h3>
                    <p>{!data ? " Loading..." : data[3].desc1}
                       
                    </p>
                        <h3>{!data ? " Loading..." : data[3].subtitle2}
                            </h3><br /> 
                        <p className='second'>{!data ? " Loading..." : data[3].desc2}
                            
                        </p>
                    </div>
                    </div>
                    <div className='column3'>
                <div className="list3">
                    
                <ul>
                        <li><img className="img" src={profile} alt="" /></li>
                    <li><img className="img" src={profile}  alt="" /></li>
                    <li><img className="img" src={profile}  alt="" /></li>
                    <li><img className="img" src={profile}  alt="" /></li>
                    <li><img className="img" src={profile} alt="" /></li>
                    <li><img className="img" src={profile}  alt="" /></li>
                    
                    </ul>
                </div>
                </div>
                    <div className="columns">
                    <div className='list2'>
                    <h2>{!data ? " Loading..." : data[3].projectDesign}
                        </h2>
                    <li className='design'><p>{!data ? " Loading..." : data[3].desc3a}
                       

                        </p></li>
                        <li className='design'><p>{!data ? " Loading..." : data[3].desc3b}

                        </p></li>
                        <li className='design'> 
                        <h2> Enjoy!!</h2>
                        </li>
                    <li className='react-button'>
                        <a href='https://github.com/codewithwest/west-dynamics.git'>
                        {!data ? " Loading..." : data[3].link}
                           
                            </a></li>     
                    </div>
                    </div>
            </div>                
            </div>
                       
            <div className='row-child' id='row-child4'>
            <div className='name'>
                <p> {!data ? " Loading..." : data[4].project}</p> 
            </div>
            
            <div className='projects'>
            <div className='column3'>
                <div className="list3">
                    
                <ul>
                        <li><img className="img" src={profile} alt="" /></li>
                    <li><img className="img" src={profile}  alt="" /></li>
                    <li><img className="img" src={profile}  alt="" /></li>
                    <li><img className="img" src={profile}  alt="" /></li>
                    <li><img className="img" src={profile} alt="" /></li>
                    <li><img className="img" src={profile}  alt="" /></li>
                    
                    </ul>
                </div>
                </div>
                <div className="columns">
                <div className='list1'>
                <h3>{!data ? " Loading..." : data[4].projectType}</h3>
                    <h3> <span className='subtitle'>with </span> 
                    {!data ? " Loading..." : data[4].subtitle}
                     </h3>
                    <p> {!data ? " Loading..." : data[4].desc1}
                        
                    </p>
                        <h3>{!data ? " Loading..." : data[4].subtitle2}</h3><br /> 
                        <p className='second'>
                        {!data ? " Loading..." : data[4].desc2}
                        </p>
                    </div>
                    </div>
                    
                    <div className="columns">
                    <div className='list2'>
                    <h2>{!data ? " Loading..." : data[4].projectDesign}</h2>
                    <li className='design'><p>
                    {!data ? " Loading..." : data[4].desc3a}
                        </p></li>
                        <li className='design'><p>
                        {!data ? " Loading..." : data[4].desc3b}
                        </p></li>
                        <li className='design'> 
                        <h2> Enjoy!!</h2>
                        </li>
                    <li className='react-button'>
                        <a href='https://github.com/codewithwest/west-dynamics.git'>
                        {!data ? " Loading..." : data[4].link}
                            </a></li>
                    
                    
                    </div>
                    </div>

                

            </div>
            

                
            </div>

            <div className='row-child' id='row-child4'>
         
            
            <div className='projects'>
            <div className='column3'>
                <div className="list3">
                    
                <ul>
                        <li><img className="img" src={profile} alt="" /></li>
                    <li><img className="img" src={profile}  alt="" /></li>
                    <li><img className="img" src={profile}  alt="" /></li>
                    <li><img className="img" src={profile}  alt="" /></li>
                    <li><img className="img" src={profile} alt="" /></li>
                    <li><img className="img" src={profile}  alt="" /></li>
                    
                    </ul>
                </div>
                </div>
                <div className="columns">
                <div className='list1'>
                <h3> {!data ? " Loading..." : data[5].projectType}</h3>
                    <h3> <span className='subtitle'>with</span> 
                    {!data ? " Loading..." : data[5].subtitle}
                    </h3>
                    <p>{!data ? " Loading..." : data[5].desc1}
                    
                    </p>
                         <h3>{!data ? " Loading..." : data[5].subtitle2}
                            </h3><br /> 
                        <p className='second'>{!data ? " Loading..." : data[5].desc2}
                        
                        </p>
                    </div>
                    </div>
   
                    <div className="columns">
                    <div className='list2'>
                    <h2>{!data ? " Loading..." : data[5].projectDesign}
                        </h2>
                    <li className='design'>
                        <p>{!data ? " Loading..." : data[5].desc3a}
                       
                        </p>
                        </li>
                        <li className='design'><p>
                            {!data ? " Loading..." : data[5].desc3b}
      
                        </p></li>
                        <li className='design'> 
                        <h2> Enjoy!!</h2>
                        </li>
                    <li className='react-button'>
                        <a href='https://github.com/codewithwest/west-dynamics.git'>
                        {!data ? " Loading..." : data[5].link}
                            
                            </a></li>
                    
                    
                    </div>
                    </div>

                

            </div>
            

                
            </div>
                
                

        </div>
    </div>


    
);
}

export default function Projects() {
    return (
      
        <ProjectsData />
        
     
    );
  }
  
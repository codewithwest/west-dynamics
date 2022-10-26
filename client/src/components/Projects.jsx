import  { React } from 'react';
import './Projects.css';
import profile from '../assets/profile.jpg';



function ProjectsData() {
    /*
    const [data, setData] = React.useState(null);
    //database import
    React.useEffect(() => {
        fetch("/api").then((res) => res.json())
        .then((data)=> setData(data.message));
      },[]
      );
    */
        
    return(
        

        
    <div className='projects-container'>
        <div className='row'>
            <div className='row-child' id='row-child1'>
                <div className='name'>
                    <p>WEB APPLICATION DEVELOPMENT</p>
                </div>
                
                <div className='projects'>
                    <div className="columns">
                    <div className='list1'>
                        <h3>REACT WEB APP</h3>
                        <h3> <span className='subtitle'>with</span> NODE BACKEND</h3>
                        <p>The web App was developed to help guide self 
                            into a good practice for backend after quite a 
                            while of front-End. </p>
                            <h3>Decicion</h3><br /> 
                            <p className='second'>The decision to do node as my backend 
                            because of the inroduction I had earlier in 
                            the year of an intermediate course to App 
                            development with react-native.  
                            </p>
                        </div>
                        </div>
                        <div className="columns">
                        <div className='list2'>
                        <h2>Design</h2>
                        <li className='design'><p>
                            To be blunt i never thought i would fall inlove with
                            web development, but then hey! here we are and you 
                            gotta admit this is b*tchin. 
                            </p></li>
                            <li className='design'><p>
                            This is all the info you can get in confidence, 
                            but to trully get the glimpse of what you signing up 
                            with click the link to the actual code.  
                            </p></li>
                            <li className='design'> 
                            <h2> Enjoy!!</h2>
                            </li>
                        <li className='react-button'><a href='https://github.com/codewithwest/west-dynamics.git'>React WebApp</a></li>
                        
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
                        <p>WEBSITE DEVELOPMENT</p>
                    </div>
                    
                    <div className='projects'>
                        <div className="columns">
                        <div className='list1'>
                            <h3>CLASSIC HTML, CSS JAVASCRPT</h3>
                            <h3> <span className='subtitle'>with a touch of </span>REACT</h3>
                            <p>The Website is a long standing plan i had,
                                to development my own company site where I
                                can show off my skills, but also a placs where
                                employers or service seeker can come and view 
                                the cotents and buy if they like.
                            </p>
                                <h3>Decicion</h3><br /> 
                                <p className='second'>
                                    I went with the classic builders because,
                                    to further yourself  in web development, 
                                    your  roots have to be this languages and
                                    so i used them to showcase where i started.
                                </p>
                            </div>
                            </div>
                            <div className="columns">
                            <div className='list2'>
                            <h2>Design</h2>
                            <li className='design'><p>
                                The design is vastly one  that aims to improve 
                                per given chance with new ideas  getting better 
                                with every update and taking it one push at a time.
                                </p></li>
                                <li className='design'><p>
                                It gives such great pleasure to get to show off my 
                                talents, and if  you are reading this  then you are 
                                most likes intrigued by what you saw above and wanted 
                                to see what is under the hood, from us in tech we say
                                WELcome To West Dynamics.
                                </p></li>
                                <li className='design'> 
                                <h2> Enjoy!!</h2>
                                </li>
                            <li className='react-button'>
                                <a href='https://westdynamics.tech'>
                                    Westdynamics.tech
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
                <p>Mobile/App Development </p>
            </div>
            
            <div className='projects'>
                <div className="columns">
                <div className='list1'>
                <h3>REACT-NATIVE APP</h3>
                    <h3> <span className='subtitle'>with</span> FIREBASE BACKEND</h3>
                    <p>The React-Native App was developed first as an assignment
                        but then turned into a business App idea for my start up.  </p>
                        <h3>Decicion</h3><br /> 
                        <p className='second'>
                            The use of React-Native with flutter is the adaptation
                            flutter has with the App development on different 
                            levels.
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
                    <h2>Design</h2>
                    <li className='design'><p>
                        The design behind the App was for re-usibility of the code 
                        and accebility of the user in mind.

                        </p></li>
                        <li className='design'><p>
                            My Passion for programming grows because of the edge to 
                            improve on innovation in different languages.The classic 
                            feel of using javascript, has a good feel on Application development. 
                        </p></li>
                        <li className='design'> 
                        <h2> Enjoy!!</h2>
                        </li>
                    <li className='react-button'><a href='https://github.com/codewithwest/west-dynamics.git'>React-Native App</a></li>
                    
                    
                    </div>
                    </div>

                

            </div>
            

                
            </div>
            
            <div className='row-child' id='row-child3'>
            
            
            <div className='projects'>
                <div className="columns">
                <div className='list1'>
                <h3>FLUTTER APP</h3>
                    <h3> <span className='subtitle'>with </span> 
                    FIREBASE BACKEND</h3>
                    <p>
                        A new journey with flutter development, 
                        Took on a new language and it is paying off.
                        Good investment for Multi-Platform development. 
                    </p>
                        <h3>Decicion</h3><br /> 
                        <p className='second'>
                            As new languages emerge one should advance and expand their knowledge, 
                            and that is what my flutter development represents.
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
                    <h2>Design</h2>
                    <li className='design'><p>
                        The design behind the App was to emulate the classic 
                        React-Native development with a slightly development 
                        momvement into code.

                        </p></li>
                        <li className='design'><p>
                            My Passion for programming grows because of the edge to 
                            improve on innovation in different languages.The classic 
                            feel of using flutter, has a good feel on Application development. 
                        </p></li>
                        <li className='design'> 
                        <h2> Enjoy!!</h2>
                        </li>
                    <li className='react-button'>
                        <a href='https://github.com/codewithwest/west-dynamics.git'>
                            Flutter App
                            </a></li>     
                    </div>
                    </div>
            </div>                
            </div>
                       
            <div className='row-child' id='row-child4'>
            <div className='name'>
                <p>DeskTop </p> 
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
                <h3>EXPO REACT APP</h3>
                    <h3> <span className='subtitle'>with </span> 
                     FIREBASE BACKEND</h3>
                    <p> 
                        From website to webapp to mobile, with expo react
                        desktop uses have been integrated and have been 
                        very helpful in designing well scallable application
                         with the same framework.  
                    </p>
                        <h3>Decicion</h3><br /> 
                        <p className='second'>
                            Since Expo has alot of cross into react-native
                             the transition was not that difficult it was a pretty 
                             smooth transition.
                        </p>
                    </div>
                    </div>
                    
                    <div className="columns">
                    <div className='list2'>
                    <h2>Design</h2>
                    <li className='design'><p>
                        I have used alot of desktop applications  and 
                        so the  design mostly targeted an improveement to 
                        the softwares i usually use on my pc. 
                        </p></li>
                        <li className='design'><p>
                            innovativeness is not just a choice, but a gift, 
                            having the edge to make it better for the next person,
                            than it was for you and so that is the perpose behind 
                            the development just to add on. 
                        </p></li>
                        <li className='design'> 
                        <h2> Enjoy!!</h2>
                        </li>
                    <li className='react-button'>
                        <a href='https://github.com/codewithwest/west-dynamics.git'>
                            React Desktop</a></li>
                    
                    
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
                <h3> </h3>
                    <h3> <span className='subtitle'>with</span> FLUTTER BACKEND</h3>
                    <p>
                    From website to webapp to mobile, with Flutter desktop uses 
                    have been integrated and have been very helpful in designing 
                    well scallable application with the same framework.
                    </p>
                         <h3>Decicion</h3><br /> 
                        <p className='second'>
                        Since Expo has alot of cross into react-native the 
                        transition was just as easy as a finger down press. 
                      
                        </p>
                    </div>
                    </div>
   
                    <div className="columns">
                    <div className='list2'>
                    <h2>Design</h2>
                    <li className='design'>
                        <p>
                        I have used alot of desktop applications and 
                        so the design mostly targeted an improveement 
                        to the softwares i usually use on my pc.
                        </p>
                        </li>
                        <li className='design'><p>
                        Innovativeness is not just a choice, but a gift, 
                        having the edge to make it better for the next person, 
                        than it was for you and so that is the perpose behind 
                        the development just to add on.
                        </p></li>
                        <li className='design'> 
                        <h2> Enjoy!!</h2>
                        </li>
                    <li className='react-button'>
                        <a href='https://github.com/codewithwest/west-dynamics.git'>
                            Flutter Desktop
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
  
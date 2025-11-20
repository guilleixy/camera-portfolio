import styles from "./MobileContent.module.css";
import { useState, useEffect } from "react";

const frames = `                            ██████                                                              
                          ████████████▒▒                            ████▒▒                      
                        ████        ██████                    ██████████████                    
                      ▒▒██              ████              ████████        ████                  
                      ████                ██          ▒▒██████              ████                
                      ████                          ██████                  ████                
                      ████                        ██████                    ████                
                      ████                      ████                        ████                
                      ████                    ████░░                        ████                
                      ████                  ████                            ████                
                      ████                ████                              ████                
                      ████                ████                                                  
                        ██            ████████████                                              
                      ████████████████████████████████████████████                              
              ████████████████      ████                  ██████████████████                    
          ████████      ▒▒██        ████                              ████████████              
      ██████              ██      ████                                        ████████          
  ██████                  ████  ████                                                ██████      
  ████                    ████  ████                            ██                      ████▒▒  
████                        ██████            ██████            ████                      ████  
████                        ████            ██████████            ██                        ████
████                        ████            ██████████            ████                        ██
  ████                    ▒▒██████          ██████████            ████                        ██
  ██████                  ████████            ██████                ████                      ██
      ██████              ██    ████                                ████                    ████
          ████          ████      ██                                  ██                ██████  
                      ▒▒██        ████                                ████          ▒▒██████    
                      ████        ████                                ████          ██████      
                      ████          ████                              ████                      
                    ▓▓██▓▓          ████                                ██                      
                    ████              ████                              ████                    
                    ████                ████                            ████                    
                  ▓▓██▓▓                ████                            ████                    
                  ████                    ████                          ████                    
                  ████                      ████                          ██                    
                  ████                      ██████                        ██                    
                  ████                        ████                        ██                    
                  ████                          ████                    ████                    
                  ██████              ████        ████▓▓                ████                    
                    ████          ██████            ██████              ████                    
                    ▒▒████████████████                ▓▓██████        ████                      
                        ██████████                        ████████░░██████                      
                                                            ▓▓██████████                        
`;

export default function MobileContent() {
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every second

    return () => clearInterval(timer);
  }, []);
  const formatDate = () => {
    return currentDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = () => {
    return currentDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };
  return (
    <div className={styles.page}>
      {/* <pre className={styles.ascii}>{frames}</pre> */}
      <h1>guillermo bernal</h1>
      <h3>{formatDate()}</h3>
      <h4>{formatTime()}</h4>
      <ul className={styles.links}>
        <li>
          <a href="">linkedin</a>
        </li>
        <li>
          <a href="">cv</a>
        </li>
      </ul>
      {/* <h4>i make it happen</h4> */}
    </div>
  );
}

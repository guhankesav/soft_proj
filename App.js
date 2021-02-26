import './App.css';

function App() {
  function login(){
    var x = document.getElementById("login");
    var y = document.getElementById("register");
    var z = document.getElementById("btn");


    x.style.left = "50px" ;
    y.style.left = "450px" ;
    z.style.left = "0px" ;
    return 0;
  }
  function register(){ 
    var x = document.getElementById("login")
    var y = document.getElementById("register")
    var z = document.getElementById("btn")


    x.style.left = "-400px" 
    y.style.left = "50px" 
    z.style.left = "110px" 
  }


  return (
    <body>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"/>
    <div className="App">
      <div class="hero">
      <div className="form-box">
      <div className="button-box">
            <div id="btn"></div>
            <button type="button" className="toggle-btn" onClick={() => login()}>Sign In</button>
            <button type="button" className="toggle-btn" onClick={() => register()}>  Sign Up</button>
            {/* <button type="button" className="toggle-btn" >Log In</button>
            <button type="button" className="toggle-btn" >Register</button> */}
            

          </div>
          {/* <div className="social-icons">
            <img src="amritaf_ico32.ico"></img>
            <img src="amritaf.png"></img>
          </div> */}
          <form id ="login" className="input-group">
            {/* <input type="text" className="input-field" placeholder="Mail-Id" required/>
            <input type="text" className="input-field" placeholder="Password" required/> */}
            <div className="inputwithIcon">
              <input type="text" placeholder="Mail-Id"/>
              <i  type="icon" class="fa fa-user-circle-o fa-lg fa-fw" aria-hidden="true"></i>

            </div>
            <div class="inputwithIcon">
              <input type="text" placeholder="Password"/>
              <i type="icon" className="inputwithiconii" class="fa fa-lock fa-lg fa-fw" aria-hidden="true"></i>
            </div>
            <input type="checkbox" className="check-box1"></input><span1>Forgot Password</span1>
            <button type="submit" className="submit-btn">Login</button>

          </form>
          <form id="register" className="input-group">
            {/* <input type="text" className="input-field" placeholder="Mail-Id" required/>
            <input type="text" className="input-field" placeholder="Password" required/> 
            <input type="text" className="input-field" placeholder="Re-Password" required/>*/}
            
            <div class="inputwithIcon">
              <input type="text" placeholder="Mail-Id"/>
              <i class="fa fa-user-circle-o fa-lg fa-fw" aria-hidden="true"></i>
            </div>
            <div class="inputwithIcon">
              <input type="text" placeholder="Password"/>
              <i type="icon" class="fa fa-lock fa-lg fa-fw" aria-hidden="true"></i>
          </div>
            <div class="inputwithIcon">
              <input type="text" placeholder="Re-Password"/>
              <i type="icon" class="fa fa-key fa-lg fa-fw" aria-hidden="true"></i>
            </div>
            <input type="checkbox" className="check-box"></input><span>I agree to terms and conditions*</span>
            <button type="submit" className="submit-btn">Register</button>

          </form>

      </div>
  </div>
    </div>

  
    </body>
  );
}

export default App;

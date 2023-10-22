<!DOCTYPE html>
<html lang="en">
<head>
        <title>CheatCode</title>
        <link rel="stylesheet" href="style.css">
        <link rel="icon" href="">
</head>
<body>
    <header class="reg_icon">
        <img src="icons/Logo1.png" id="reg_icon">
    </header>
    <main class="login_form">
        <ul class="tab_group">
            <li class="tab_active"><a href="">Sign Up</a></li>
            <li class="tab"><a href="">Login</a></li>
        </ul>
        <div class="tab_content">
            <div id="signup">
                <h1>Fill the form to Sign Up</h1>

                <form class="form" action="/" method="POST" enctype="multipart/form-data">
                    <label for="Username">Username:</label><br>
                    <input type="text" id="username" placeholder="Username" minlength="4" maxlength="12"><br>
                
                    <label for="email">Email:</label><br>
                    <input type="email" id="email" placeholder="e.g example@cheatcode.com" required><br>
                
                    <label for="password">Password:</label><br>
                    <input type="password" id="password" placeholder="*******" required><br>
                    
                    <label for="password">Confirm Password:</label><br>
                    <input type="password" id="password" placeholder="******" required><br>
                                
                    <input type="reset" id="reset">
                    <input type="submit" id="submit">
                </form>
            </div>
        </div>
        
        </form>
    </main>
    <footer>
        <nav class="navbar_bottom">
            <lu class="footlinks">
                <a href="">Frequently Asked Questions</a>
                <a href="">Privacy Policy</a>
                <a href="">Frequently Asked Questions</a>
            </lu>
        </nav>
            
        <hr>
        <p class="ctag"> &#169 2023 Phoenix Tech Dynamics</p>
    </footer>
</body>
    
    
</html>
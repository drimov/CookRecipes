import React from "react"


interface FooterProps {
  navigationList: string[]
}

const Footer: React.FC<FooterProps> = ({ navigationList }) => {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer className="container flex flex-col justify-between rounded-lg text-xl ">
        <div className="flex w-full flex-row justify-between rounded-lg bg-primary">
          <nav className="flex flex-row justify-between bg-primary ">
            <div>
              <h3>About</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis dignissimos deserunt libero perferendis! Voluptatibus
                officiis placeat soluta. At, suscipit molestias.
              </p>
            </div>
            <ul className="flex-3/4  m-7 flex flex-row justify-between text-2xl tracking-widest">
              {navigationList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </nav>
          <img
            src="../public/Ressources/img/eating.jpg"
            alt="photo"
            className="w-60 justify-end rounded-lg bg-gradient-to-r from-blue-500 to-transparent"
          />
        </div>

        <p className="my-auto w-full text-center">
          &copy; {currentYear} Cook Recipes. Tous droits réservés.
        </p>
      </footer>
      {/* <div className="container grid grid-col-footer">
            <div className="logo-col">
            <a href="#" className="footer-logo">
                <img className="logo" alt="Cook Recipes logo" src="img/cookrecipeslogo.png" />
            </a>

            <ul className="social-links">
                <li>
                <a className="footer-link" href="#">
                    <ion-icon className="social-icon" name="logo-instagram"></ion-icon>
                </a>
                </li>
                <li>
                <a className="footer-link" href="#">
                    <ion-icon className="social-icon" name="logo-facebook"></ion-icon>
                </a>
                </li>
                <li>
                <a className="footer-link" href="#">
                    <ion-icon className="social-icon" name="logo-twitter"></ion-icon>
                </a>
                </li>
            </ul>

            <p className="copyright">
                Copyright &copy; 2027 by Cook Recipes, Inc. All rights reserved.
            </p>
            </div>

            <div className="address-col">
            <p className="footer-heading">Contact us</p>
            <address className="contacts">
                <p className="address">
                623 Harrison St., 2nd Floor, San Francisco, CA 94107
                </p>
                <p>
                <a className="footer-link" href="tel:415-201-6370">415-201-6370</a><br />
                <a className="footer-link" href="mailto:hello@cookrecipes.com">hello@cookrecipes.com</a>
                </p>
            </address>
            </div>

            <nav className="nav-col">
            <p className="footer-heading">Account</p>
            <ul className="footer-nav">
                <li><a className="footer-link" href="#">Create account</a></li>
                <li><a className="footer-link" href="#">Sign in</a></li>
                <li><a className="footer-link" href="#">iOS app</a></li>
                <li><a className="footer-link" href="#">Android app</a></li>
            </ul>
            </nav>

            <nav className="nav-col">
            <p className="footer-heading">Company</p>
            <ul className="footer-nav">
                <li><a className="footer-link" href="#">About Cook Recipes</a></li>
                <li><a className="footer-link" href="#">For Business</a></li>
                <li><a className="footer-link" href="#">Cooking partners</a></li>
                <li><a className="footer-link" href="#">Careers</a></li>
            </ul>
            </nav>

            <nav className="nav-col">
                <p className="footer-heading">Resources</p>
                <ul className="footer-nav">
                    <li><a className="footer-link" href="#">Recipe directory</a></li>
                    <li><a className="footer-link" href="#">Help center</a></li>
                    <li><a className="footer-link" href="#">Privacy & terms</a></li>
                </ul>
            </nav>
        </div> */}
    </>
  )
}

export default Footer

import { useLocation ,useRouteMatch, Route, Switch, Redirect } from "react-router-dom";
import cn from 'classnames';


import HomePage from "../../routes/HomePage";
import GamePage from "../../routes/GamePage";
import AboutPage from "../../routes/AboutPage";
import ContactPage from "../../routes/ContactPage";
import NotFound from "../../routes/NotFound/";
import MenuHeader from "../MenuHeader";
import Footer from "../Footer"; 



import s from './style.module.css';
import { FireBaseContext } from "../../context/firebaseContext";
import Firebase from "../../service/firebase";



  


const App = () => {
	const isRoot = useLocation('/')
	const isHome = useRouteMatch('/home');
	const isHomePage = (!isRoot && !isHome) || (isRoot && isRoot.isExact) || (isHome && isHome.isExact);
	
	return (
		<FireBaseContext.Provider value={new Firebase()}>
			<Switch>
				
				<Route>
					<>
						<MenuHeader bgActive={!isHomePage} />
						<div className={cn(s.wrap,{
							[s.isHomePage]: isHomePage
						})}>
							<Switch>
								<Route path="/" exact component={HomePage} />
								<Route path="/home" component={HomePage} />
								<Route path="/game" component={GamePage} />
								<Route path="/about" component={AboutPage}/>
								<Route path="/contact" component={ContactPage}/>
								<Route path="/404" component={NotFound}/>
								<Route render={() => (
									<Redirect to="/404" />
								)} />
							</Switch>
						</div>
						
						<Footer />


					</>
				</Route>

				

			</Switch>
		</FireBaseContext.Provider>
	)

  
};

export default App;
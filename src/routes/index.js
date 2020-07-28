import About from '../pages/About';
import Home from '../pages/Home';
import Upload from '../pages/Upload';
import Profile from '../pages/Profile';

const Routes = [
    {name: "About", component: About, path: '/about'},
    {name: "Profile", component: Profile, path: '/profile/:id'},
    {name: "Upload", component: Upload, path: '/upload'},
    {name: "Home", component: Home, path: '/'},
]

export default Routes
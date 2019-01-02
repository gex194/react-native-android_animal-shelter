import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import StartPage from './components/startpage';
import MapComponent from './components/map';
import Home from './components/home';
import Photos from './components/photos';
import PhotoDetailsDog from './components/details_dog';
import PhotoDetails from './components/details';
import LoginForm from './components/login';

const AppNavigator = createDrawerNavigator(
  {
    Главная: StartPage,
    Карта: MapComponent,
    Новости: Home,
    Список: Photos,
    Собаки: PhotoDetailsDog,
    Кошки: PhotoDetails,
    Связь: LoginForm
  },
  {
    initialRouteName: "Главная"
  }
);

export default createAppContainer(AppNavigator);
/**
 * Created by admin on 2017/4/2.
 */
import Signin from '@/view/other/Signin';
import Welcome from '@/view/other/welcome/Welcome'
var router = [
  {path: '/signin', name: 'Signin', component: Signin},
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome
  }];
export default router;

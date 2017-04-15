/**
 * Created by admin on 2017/4/2.
 */
import User from '@/view/user/User';
// import UserProfile from '@/view/user/profile/Profile';
var userRouter = [{
  path: '/user',
  name: 'User',
  component: User,
  children: [
    {
      path: 'profile',
      component: function (resovle) {
        require(['@/view/user/profile/Profile'], resovle);
      }
    }
  ]
}];
export default userRouter

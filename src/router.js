import { Router } from 'express';
import * as Response from './controllers/responseController';
import * as Email from './controllers/emailController';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'welcome to our api!' });
});

// router.post('/email', Email.sendMatchEmail);
// // router.post('/verification', Email.emailVerification);
// router.get('/verify/:id', Email.afterVerification);

// post routes
// router.route('/posts')
//   .post(requireAuth, Posts.createPost)
//   .get(Posts.getPosts);

// response routes
router.route('/responses')
  .get(Response.getResponse)
  .post(Response.createResponse);

router.route('/responses/:id')
  .get(Response.getResponse)
  .delete(Response.deleteResponse);

router.route('/email/:id')
  .post(Email.sendReflectionEmail);

router.route('/verify/:id')
  .get(Email.verifyResponse);

router.route('/verify').post(Email.sendVerificationEmail);

// router.route('/posts/:id')
//   .get(requireAuth, Posts.getPost)
//   .delete(requireAuth, Posts.deletePost)
//   .put(requireAuth, Posts.updatePost);

// router.route('/user/:username')
//   .get(requireAuth, UserController.getUser)
//   .put(requireAuth, UserController.updateUserRating);

// router.get('/posts/:id/responses', requireAuth, Response.getResponses);
//
// router.post('/posts/:id/respond', requireAuth, Response.createResponse);
export default router;

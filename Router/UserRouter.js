import {
  userSignUp,
  verifyUser,
  homePage,
  generateAccessToken,
  otpValidation,
  userLogin,
  logOutUser,
  loginWithGoogle,
  followUser,
  profile,
  userProfile,
  unFollowUser,
  userSearch,
  uploadProfile,
  createPost,
  uploadImageCloud,
  deleteImage
} from '../controller/User.js';

import express from 'express';
import { userAuthentication, userProtectedRoutes } from '../Middlewares/userAuthentication.js';
import multer from 'multer';
const upload = multer({ dest: 'uploads/' }); 

const router = express.Router();
router.post('/otpValidation', otpValidation);
router.post('/signUp', userSignUp);
router.post('/generateAccessToken', generateAccessToken);
router.post('/verifyUser', userAuthentication, verifyUser);
router.post('/login', userLogin);
router.post('/loginWithGoogle', loginWithGoogle);
router.post('/logOutUser', logOutUser);
router.get('/homePage',userProtectedRoutes,  homePage);
router.get('/followUser/:id',userProtectedRoutes, followUser);
router.get('/unFollowUser/:id',userProtectedRoutes, unFollowUser);
router.get('/profile/:id', userProtectedRoutes, profile);
router.get('/profile', userProtectedRoutes, userProfile);
router.get('/search/:value', userProtectedRoutes, userSearch);
router.post('/profile/upload', userProtectedRoutes,upload.single('file'), uploadProfile);
router.post('/createPost/:content', userProtectedRoutes, createPost);
router.post('/uploadImage', userProtectedRoutes,upload.single('file'),  uploadImageCloud);
router.post('/deleteImage', userProtectedRoutes, deleteImage);
export default router;

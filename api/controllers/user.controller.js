export const test= (req,res)=>{
    res.json({message:'API working Fine from route and controller'})
}

export const deleteUser = async (req, res, next) => {
    if (req.user.id !== req.params.userId) {
        return next(errorHandler(403, 'You are not allowed to delete this user'));
      }
      try {
        await User.findByIdAndDelete(req.params.userId);
        res.status(200).json('User has been deleted');
      } catch (error) {
        next(error);
      }
}

export const signout =(res,req,next)=>{
    try {
        res.clearCookie('access_token')
        .status(200)
        .json('User has been Signed out')
    } catch (error) {
        next(error)
    }
};
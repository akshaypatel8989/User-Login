const {z, string}= require('zod');

const signupSchema = z.object({
    username:z
    .string({required_error:"Name is require"})
    .trim()
    .min(3,{massage:"Name must be at lest of 3 chars."})
    .max(255,{massage:"Name must be at lest of 255 chars."}),
   
    phone:z
    .string({required_error:"Phone is required"})
    .trim()

    .min(10,{massage:"Phone must be at least of 10 charaters"})
    .max(20,{massage:"Name must be at lest of 20 chars."}),
    password:z
    .string({required_error:"Password is required"})
    .trim()
  
    .min(6,{massage:"password must be at least of 6 charaters"})
    .max(255,{massage:"Name must be at lest of 255 chars."}),
})
module.exports=signupSchema;
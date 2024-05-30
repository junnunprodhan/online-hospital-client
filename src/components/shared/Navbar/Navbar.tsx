'use client';


import useUserInfo from '@/hooks/useUserInfo';
import { logoutUser } from '@/services/actions/logoutUser';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const AuthButton =dynamic(
        ()=> import("@/components/UI/AuthButton/AuthButton"),
        {ssr:false}
    );
   const userInfo = useUserInfo();
   const router = useRouter();

  

   return (
      <Box
         sx={{
            bgcolor: 'primary.main',
         }}
      >
         <Container>
            <Stack
               py={2}
               direction='row'
               justifyContent='space-between'
               alignItems='center'
            >
               <Typography
                  variant='h4'
                  component={Link}
                  href='/'
                  fontWeight={600}
               >
                  P
                  <Box component='span' color='#ffffff'>
                     H
                  </Box>{' '}
                  Health Care
               </Typography>

               <Stack direction='row' justifyContent='space-between' gap={4}>
                  <Typography
                     component={Link}
                     href='/consultation'
                     color='#ffffff'
                  >
                     Consultation
                  </Typography>

                  <Typography color='#ffffff'>Diagnostics</Typography>
                  <Typography component={Link} href='/doctors' color='#ffffff'>
                     Doctors
                  </Typography>

                  {userInfo?.userId ? (
                     <Typography
                        component={Link}
                        href='/dashboard'
                        color='#ffffff'
                     >
                        Dashboard
                     </Typography>
                  ) : null}
               </Stack>

               <AuthButton/>
            </Stack>
         </Container>
      </Box>
   );
};

export default Navbar;



// 'use client';

// import AuthButton from '@/components/UI/AuthButton/AuthButton';
// import useUserInfo from '@/hooks/useUserInfo';
// import { logoutUser } from '@/services/actions/logoutUser';
// import { Box, Button, Container, Stack, Typography } from '@mui/material';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';

// const Navbar = () => {
//     const userInfo = useUserInfo();
//    const router = useRouter();

//    const handleLogOut = () => {
//       logoutUser(router);
//    };

//    return (
//       <Box
//          sx={{
//             bgcolor: 'primary.main',
//          }}
//       >
//          <Container>
//             <Stack
//                py={2}
//                direction='row'
//                justifyContent='space-between'
//                alignItems='center'
//             >
//                <Typography
//                   variant='h4'
//                   component={Link}
//                   href='/'
//                   fontWeight={600}
//                >
//                   P
//                   <Box component='span' color='#ffffff'>
//                      H
//                   </Box>{' '}
//                   Health Care
//                </Typography>

//                <Stack direction='row' justifyContent='space-between' gap={4}>
//                   <Typography
//                      component={Link}
//                      href='/consultation'
//                      color='#ffffff'
//                   >
//                      Consultation
//                   </Typography>

//                   <Typography color='#ffffff'>Diagnostics</Typography>
//                   <Typography component={Link} href='/doctors' color='#ffffff'>
//                      Doctors
//                   </Typography>

//                   {userInfo?.userId ? (
//                      <Typography
//                         component={Link}
//                         href='/dashboard'
//                         color='#ffffff'
//                      >
//                         Dashboard
//                      </Typography>
//                   ) : null}
//                </Stack>

//                <AuthButton/>
//             </Stack>
//          </Container>
//       </Box>
//    );
// };

// export default Navbar;
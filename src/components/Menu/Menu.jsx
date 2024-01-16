import "./Menu.css"
 import WomanRoundedIcon from '@mui/icons-material/WomanRounded';
 import Man2OutlinedIcon from '@mui/icons-material/Man2Outlined';
import { Button,  List,  ListItem,  TextField } from "@mui/material";
import ButtonGroup from '@mui/material/ButtonGroup';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useParams, useSearchParams } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import * as React from 'react';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import FormControl from '@mui/material/FormControl';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { set, useForm } from "react-hook-form";
import Slider from '@mui/material/Slider';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import { addCategories, addMenu, addSubcategory, getCategories, getMenus, getSubcategory } from "./MenuSlice";
import { VisibilityOff } from "@mui/icons-material";
// import { Drawer } from "../Drawer/Drawer";
const style = {
   position: 'absolute',
   top: '50%',
   left: '51%',
   transform: 'translate(-50%, -50%)',
   width: 300,
   bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4,
 };
const style10 = {
borderBottom:"5px solid blue",
borderRadius:"5px"
 };
const style15 = {
   borderBottom:"5px solid blue",
borderRadius:"5px"
 };
 const minStyle = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4,
 };

 const styleInp ={
border:"none"
 }
 const styleCategories = {
   position: 'absolute',
   top: '52%',
   left: '55%',
   transform: 'translate(-50%, -50%)',
   minWidth:890,
   // width:"auto",
   height:580,
   bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4,
//    width: "860px",
// height: "505px",
// top: -"937px",
// left: "1345px",
// borderRadius: "5px",

 };
 
const style5 = {
   position: 'absolute',
   top: '40%',
   left: '16%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   // height:"auto",
   bgcolor: 'background.paper',
   border: '1px solid #000',
   borderRadius:"15px",
   boxShadow: 24,
   p: 4,
 };
 export function Menu() {
//modal///
const [open, setOpen] = React.useState(false);
const handleOpen = () =>{
   setOpen(true);
   setSearchParams({
    

   })
} 
const [fileUrl, setFileUrl] = React.useState('');
const [fileUrl2, setFileUrl2] = React.useState('');
const [urlSubcategory, setUrlSubcategory] = React.useState('');
const [gender , setGender]  = React.useState()
const [cat, setCat] = React.useState("")
const [val ,setVal] = React.useState("as")
const [valBool , setValBool] = React.useState(true)
const [catId, setCatId] = React.useState("")
const list = useSelector((state) => state.menu.menuList)
const [catName, setCatName] = React.useState("")
const categoriesList = useSelector((state)=>  state.menu.categoriesList )
const subcategoryList = useSelector((state)=>  state.menu.subcategoryList )
const [filtSubcategoryList, setFiltSubcategoryList] = React.useState([])
// let  filtSubcategoryList =[]
const [searchFilt , setSerarchFilt] = React.useState([])
const [data, setData] = React.useState([])
const [min , setMin]= React.useState(5)
const [max , setMax]= React.useState(100)
const [vendorCode , setVendorCode] = React.useState("")
const [price , setPrice] = React.useState("")
const[ result , setResult] = React.useState("")
const [maxPrice , setMaxPrice] = React.useState([])
const dispatch = useDispatch()
const [open5, setOpen5] = React.useState(false);
  const handleOpen5 = () => setOpen5(true);
  const handleClose5 = () => setOpen5(false);
const handleClose = () =>{
   setOpen(false);
   // fileUrl('')
   setFileUrl('')
   // setSearchParams({})

    reset({title: ""})
} 

React.useEffect(()=>{
dispatch(getMenus())
dispatch(getCategories())
dispatch(getSubcategory())

// console.log(categoriesList);
setVal("")
},[])

//////
///////min categories
React.useEffect(()=>{  
    let arr = []
 subcategoryList.map((el, ind)=>{
   // console.log(el.price , "el.price");
   // console.log(Math.max(el.price) , "price meax");

   arr[ind] = el.price
   // console.log(ind , "ind");
   console.log(subcategoryList[ind].price);
   // console.log(arr);
   
 
 }) 
console.log(arr);
// console.log((Math.max(...arr));
setMaxPrice(Math.max(...arr))
// setMaxPrice()

},[subcategoryList]) 
 console.log(maxPrice , "max price");
const [minOpen, setMinOpen] = React.useState(false);
const minHandleOpen = () => setMinOpen(true);
const minHandleClose = () => setMinOpen(false);

const [filt, setFilt]= React.useState([])
const [openCategories, setOpenCategories] = React.useState(false);
const handleOpenCategories = () =>{
    setOpenCategories(true);
  setFileUrl('')
}
const handleCloseCategories =()=>   setOpenCategories(false);

/// modal///

   const [searchParams, setSearchParams] = useSearchParams()
////yup...///
const handleFileChange = (event) => {
   const file = event.target.files[0];
   const url = URL.createObjectURL(file);
   setFileUrl(url);  
    console.log(fileUrl);
};
const handleFileChange2 = (event) => {
   const file = event.target.files[0];
   const url = URL.createObjectURL(file);
   setFileUrl2(url);  
    console.log(fileUrl);
};

   const schema = yup
        .object({
            title: yup.string("it`s must be string").required("it`s must be required"),
           
        })
        .required()

    const {
        register,
        
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    React.useEffect(()=>{
          setCat(searchParams.get("categories"))
          console.log(cat);
    },[searchParams])

 React.useEffect(()=>{
   setFiltSubcategoryList(subcategoryList)

 },[subcategoryList])
//      const onSubmit const onSubmit const onSubmit const onSubmit const onSubmit const onSubmit
//      const onSubmit const onSubmit const onSubmit const onSubmit const onSubmit const onSubmit
//      const onSubmit const onSubmit const onSubmit const onSubmit const onSubmit const onSubmit
//      const onSubmit const onSubmit const onSubmit const onSubmit const onSubmit const onSubmit
//      const onSubmit const onSubmit const onSubmit const onSubmit const onSubmit const onSubmit

    const onSubmit = (data) => { 

      console.log(data); 
      data.fileUrl = fileUrl
     
  if (searchParams.get("catId")) {
      data.fileUrl = fileUrl
         let s = data
         let newData = s
         newData.catId = catId
        newData.fileUrl = fileUrl
        newData.price = price
console.log(newData.fileUrl);
        dispatch(addSubcategory(newData)).then(()=>{
         dispatch(getSubcategory()) 
             setFileUrl('')
        })
     setVal("valsset111")  
  setOpenCategories(false);

      
         // console.log(newData);
         // setVal("")
       
         setPrice('')
            //   handleCloseCategories()
   }   
   else    if (searchParams.get("userId")) {
      console.log("jj");console.log("userId");
         data.userId= searchParams.get("userId")
      
         dispatch(addCategories(data)).then(()=>{
            dispatch(getCategories())
          
         }) 
         setMinOpen(false)
   }
   else  if (searchParams.get("id") === "male") {
      console.log("Id");
         data.gender = "male"
       
         dispatch(addMenu(data)).then(()=>{
            console.log("male");
            dispatch(getMenus())  
         
         })
         console.log(list , "list") ;
     
      } 
      else{
      console.log("Id");

         data.gender = "famale" 
         dispatch(addMenu(data)).then(()=>{
            console.log("male");
            dispatch(getMenus())   
                  setFileUrl('')
         })

      }

   console.log(data);
   handleClose()
  }
////yup






 const minDistance = 10;
const [state, setState] = React.useState({
   top: false,
   left: false,
   bottom: false,
   right: false,
 });

 const toggleDrawer = (anchor, open) => (event) => {
   if (
     event &&
     event.type === 'keydown' &&
     (event.key === 'Tab' || event.key === 'Shift')
   ) {
     return;
   }

   setState({ ...state, [anchor]: open });
 };





 ////// slider////
 function valuetext(value) {
   return `${value}`;
 }
console.log(maxPrice);
  const [value, setValue] = React.useState([0, maxPrice]);


  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value);
  };
 
   //   console.log(maxPrice , );

 ////// slider////  
 const list2 = (anchor) => (
<>

   <Box
     sx={{" margin-top":"35px" }}
     role="presentation"

   >

         <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={0}
        max={maxPrice}
       
       />

    </Box>
    <Button variant="text">{value[0]} </Button>
    ---
    <Button variant="text">{value[1]}</Button>
     <List>
 <Box sx={{ width: 300 }}>

    </Box>
     
 
          
     
  
     </List>
     <Divider />

      <Button sx={{ width: "80%", "margin-left":"25px" }}         onClick={()=>{
toggleDrawer(anchor, false)
         setMin(value[0])
         setMax(value[1])
         
  
      }}
    onKeyDown={toggleDrawer(anchor, false)} variant="contained">Contained</Button>

   </Box>
   </>
 );



// console.log(subcategoryList,"subcategoryList");
//////search////
//////search////
//////search////
const [open1, setOpen1] = React.useState(false);

const handleOpen1 = React.useCallback(() => setOpen1(true), []);

const handleClose1 = React.useCallback(() => setOpen1(false), []);

React.useEffect(()=>{
   setValBool(false)
 let result1 = filtSubcategoryList?.filter((todo)=>{
       return todo.title.toLowerCase().includes(val.toLowerCase())
   })
   setResult(result1)
//   subcategoryList = {}
//   subcategoryList = {...result}
//   console.log(subcategoryList , "valS");

},[val])

React.useEffect(()=>{
    dispatch(getSubcategory())
  
},[result])
React.useEffect(()=>{
    dispatch(getSubcategory())
},[val])


//////search////
//////search////
//////search////



React.useEffect(()=>{
   console.log(val , "useefect val");
   if (val ==  "valsset") {
      // console.log("valsetvalssetvalssetvalssetvalssetvalssetvalssetvalssetvalssetvalssetvalssetvalssetvalssetvalssetvalssetvalssetvalssetvalsset");
      // log
      setVal("")
   }
},[val])
React.useEffect(()=>{
   console.log(val , "useefect val");
   if (val ==  "valsset111") {
      // console.log("valsetvalssetvalssetvalssetvalssetvalssetvalssetvalssetvalssetvalssetvalssetvalssetvalssetvalssetvalssetvalssetvalssetvalsset");
      // log
      setTimeout(() => {
           setVal("")
      
      }, 50);
    
   }
},[val])

   return(
      <>
      <>
      {/* <div className="header">
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
     
      <TextField
        id="input-with-icon-textfield"
        label="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
  
    </Box>
    </div> */}
    {/*                  header      header   header   header   header                              */}
    {/*                  header      header   header   header   header                              */}
    {/*                  header      header   header   header   header                              */}
    {/*                  header      header   header   header   header                              */}
    <div className="header">
      <div className="hInp"> 

      <br></br>
       <input id="inp" value={val} placeholder="Search" onChange={(e)=>{
                  setVal(e.target.value)
      }}     />
     
       
 
         <div className="hSearch">
    
    
           <SearchIcon />
   </div>
      </div>
    </div>
      <div className="menu">
         <div className="gender">
     
       
         <div className="famale">
      {searchParams.get("id") !== "famale" ?  <Button variant="text" onClick={()=>{
            setGender("famale")
            setSearchParams({
               id: "famale"
            })
         }}>

<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M3.19275 13.5375L6.06599 12.8196L6.23176 12.1564C5.16951 12.0125 4.13926 11.6902 3.18453 11.2032C3.07811 11.1394 3.01019 11.0272 3.00301 10.9034C2.99549 10.7796 3.04896 10.6598 3.14628 10.5827C3.15978 10.5737 4.50003 9.46762 4.50003 5.63532C4.50003 2.40326 5.25677 0.764386 6.75003 0.764386H6.97503C7.49309 0.208152 8.24431 -0.0698417 9.00002 0.0150247C10.4093 0.0150247 13.5 1.4306 13.5 5.63532C13.5 9.46762 14.8403 10.5737 14.85 10.5812C15.0158 10.7051 15.0497 10.9399 14.9257 11.1057C14.8966 11.1445 14.8602 11.1774 14.8185 11.2024C13.8646 11.694 12.833 12.0175 11.769 12.1586L11.9348 12.8203L14.8072 13.5382C16.6853 14.0051 18.0027 15.6915 18 17.6253C18 17.8322 17.8321 18 17.625 18H0.374987C0.167881 18 -2.47955e-05 17.8322 -2.47955e-05 17.6253C-0.00308418 15.6913 1.31436 14.0044 3.19275 13.5375Z"
                    fill={searchParams.get('gender') === 'woman' ? "#3622e7" : "#939393"}/>
            </svg>

</Button> :<Button variant="contained" onClick={()=>{
            setGender("famale")
            setSearchParams({
               id: "famale"
            })
         }}>
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M3.19275 13.5375L6.06599 12.8196L6.23176 12.1564C5.16951 12.0125 4.13926 11.6902 3.18453 11.2032C3.07811 11.1394 3.01019 11.0272 3.00301 10.9034C2.99549 10.7796 3.04896 10.6598 3.14628 10.5827C3.15978 10.5737 4.50003 9.46762 4.50003 5.63532C4.50003 2.40326 5.25677 0.764386 6.75003 0.764386H6.97503C7.49309 0.208152 8.24431 -0.0698417 9.00002 0.0150247C10.4093 0.0150247 13.5 1.4306 13.5 5.63532C13.5 9.46762 14.8403 10.5737 14.85 10.5812C15.0158 10.7051 15.0497 10.9399 14.9257 11.1057C14.8966 11.1445 14.8602 11.1774 14.8185 11.2024C13.8646 11.694 12.833 12.0175 11.769 12.1586L11.9348 12.8203L14.8072 13.5382C16.6853 14.0051 18.0027 15.6915 18 17.6253C18 17.8322 17.8321 18 17.625 18H0.374987C0.167881 18 -2.47955e-05 17.8322 -2.47955e-05 17.6253C-0.00308418 15.6913 1.31436 14.0044 3.19275 13.5375Z"
                    fill={searchParams.get('gender') === 'woman' ? "#3622e7" : "#939393"}/>
            </svg>

            {/*  */}
{/* <svg width="70" height="52" viewBox="0 0 70 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_312_189)">
<rect x="10" y="10" width="50" height="32" rx="5" fill="white"/>
</g>
<path d="M29.1928 30.5375L32.066 29.8196L32.2318 29.1564C31.1695 29.0125 30.1393 28.6902 29.1845 28.2032C29.0781 28.1394 29.0102 28.0272 29.003 27.9034C28.9955 27.7796 29.049 27.6598 29.1463 27.5827C29.1598 27.5737 30.5 26.4676 30.5 22.6353C30.5 19.4033 31.2568 17.7644 32.75 17.7644H32.975C33.4931 17.2082 34.2443 16.9302 35 17.015C36.4093 17.015 39.5 18.4306 39.5 22.6353C39.5 26.4676 40.8403 27.5737 40.85 27.5812C41.0158 27.7051 41.0497 27.9399 40.9257 28.1057C40.8966 28.1445 40.8602 28.1774 40.8185 28.2024C39.8646 28.694 38.833 29.0175 37.769 29.1586L37.9348 29.8203L40.8072 30.5382C42.6853 31.0051 44.0027 32.6915 44 34.6253C44 34.8322 43.8321 35 43.625 35H26.375C26.1679 35 26 34.8322 26 34.6253C25.9969 32.6913 27.3144 31.0044 29.1928 30.5375Z" fill="#0008C1"/>
<defs>
<filter id="filter0_d_312_189" x="0" y="0" width="70" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_312_189"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_312_189" result="shape"/>
</filter>
</defs>
</svg> */}

</Button> } 
         </div>
         <div className="male">
         {searchParams.get("id") !== "male" ?   <Button  variant="text" onClick={()=>{
             setGender("male")
 setSearchParams({
   id: "male"
})
         }}>
<svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
<g clip-path="url(#clip0_312_187)">
<path d="M18.989 17.5343L18.514 15.7343C18.2887 14.861 17.6054 14.1588 16.705 13.875L13.2217 12.7755C12.3722 12.4403 11.9835 11.1443 11.8996 10.6522C12.5469 10.1423 12.9633 9.41685 13.0634 8.62499C13.0491 8.48974 13.0828 8.35383 13.1591 8.23873C13.2826 8.20944 13.3836 8.1257 13.4307 8.01373C13.6586 7.49088 13.8016 6.93837 13.855 6.37499C13.8551 6.34437 13.8512 6.31389 13.8431 6.28425C13.7864 6.06533 13.6506 5.87215 13.4592 5.73824V3.74998C13.4592 2.54173 13.0697 2.04599 12.6596 1.75873C12.5813 1.17675 11.9234 0 9.50089 0C7.35163 0.0819844 5.62909 1.71387 5.54255 3.75001V5.73827C5.35114 5.87218 5.21528 6.06537 5.15858 6.28429C5.15056 6.31392 5.14659 6.34444 5.1467 6.37502C5.19999 6.93868 5.34305 7.49145 5.57105 8.01453C5.60534 8.12053 5.69525 8.20206 5.80855 8.2298C5.85289 8.25078 5.93602 8.35956 5.93602 8.62506C6.03662 9.41917 6.45551 10.1463 7.10611 10.6561C7.02299 11.1473 6.63664 12.4426 5.81096 12.7696L2.29674 13.875C1.3971 14.1588 0.714283 14.8603 0.488584 15.7328L0.0135835 17.5328C-0.040188 17.7336 0.0879879 17.9376 0.299882 17.9885C0.331537 17.9962 0.364082 18 0.396738 18.0001H18.6051C18.8237 18 19.0009 17.8321 19.0008 17.625C19.0008 17.5943 18.9968 17.5639 18.989 17.5343Z" fill="#939393"/>
</g>
<defs>
<clipPath id="clip0_312_187">
<rect width="19" height="18" fill="white"/>
</clipPath>
</defs>
</svg>
</Button> :<Button  variant="contained" onClick={()=>{
             setGender("male")
 setSearchParams({
   id: "male"
})
         }}>
<svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
<g clip-path="url(#clip0_312_187)" >
<path d="M18.989 17.5343L18.514 15.7343C18.2887 14.861 17.6054 14.1588 16.705 13.875L13.2217 12.7755C12.3722 12.4403 11.9835 11.1443 11.8996 10.6522C12.5469 10.1423 12.9633 9.41685 13.0634 8.62499C13.0491 8.48974 13.0828 8.35383 13.1591 8.23873C13.2826 8.20944 13.3836 8.1257 13.4307 8.01373C13.6586 7.49088 13.8016 6.93837 13.855 6.37499C13.8551 6.34437 13.8512 6.31389 13.8431 6.28425C13.7864 6.06533 13.6506 5.87215 13.4592 5.73824V3.74998C13.4592 2.54173 13.0697 2.04599 12.6596 1.75873C12.5813 1.17675 11.9234 0 9.50089 0C7.35163 0.0819844 5.62909 1.71387 5.54255 3.75001V5.73827C5.35114 5.87218 5.21528 6.06537 5.15858 6.28429C5.15056 6.31392 5.14659 6.34444 5.1467 6.37502C5.19999 6.93868 5.34305 7.49145 5.57105 8.01453C5.60534 8.12053 5.69525 8.20206 5.80855 8.2298C5.85289 8.25078 5.93602 8.35956 5.93602 8.62506C6.03662 9.41917 6.45551 10.1463 7.10611 10.6561C7.02299 11.1473 6.63664 12.4426 5.81096 12.7696L2.29674 13.875C1.3971 14.1588 0.714283 14.8603 0.488584 15.7328L0.0135835 17.5328C-0.040188 17.7336 0.0879879 17.9376 0.299882 17.9885C0.331537 17.9962 0.364082 18 0.396738 18.0001H18.6051C18.8237 18 19.0009 17.8321 19.0008 17.625C19.0008 17.5943 18.9968 17.5639 18.989 17.5343Z" fill="#939393"/>
</g>
<defs>
<clipPath id="clip0_312_187">
<rect width="19" height="18" fill="white"/>
</clipPath>
</defs>
</svg>
</Button>
   }  </div>
    
         <div className="filter">
           <div>
              {/* {[''].map((anchor) => (
                <React.Fragment key={anchor}> */}
              
                  <Button onClick={handleOpen5}>  <button onClick={()=>{
          

         }}>   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M16.172 5.73484H16.9543C17.2411 5.73484 17.4758 5.47678 17.4758 5.16137C17.4758 4.84596 17.2411 4.58789 16.9543 4.58789H16.172C15.8852 4.58789 15.6505 4.84596 15.6505 5.16137C15.6505 5.47678 15.8852 5.73484 16.172 5.73484Z" fill="white"/>
<path d="M23.8902 0.630824C23.7077 0.229391 23.3427 0 22.9515 0H1.04846C0.657335 0 0.292284 0.258064 0.109758 0.630824C-0.0727673 1.03226 -0.0206171 1.49104 0.214059 1.83513L9.41857 14.5663V22.853C9.41857 23.2832 9.62717 23.6559 9.96614 23.8566C10.1226 23.9427 10.279 24 10.4616 24C10.6702 24 10.8788 23.9427 11.0613 23.7993L13.9556 21.5914C14.3728 21.2473 14.6075 20.7312 14.6075 20.1864V14.5376L23.7859 1.83513C24.0206 1.49104 24.0728 1.03226 23.8902 0.630824ZM13.6688 13.9928C13.6167 14.0789 13.5645 14.1935 13.5645 14.3369V20.1577C13.5645 20.3584 13.4863 20.5305 13.3559 20.6452L10.4616 22.853V14.3369C10.4616 14.1362 10.3833 13.9642 10.253 13.8781L4.36 5.73477H13.8253C14.1121 5.73477 14.3468 5.4767 14.3468 5.16129C14.3468 4.84588 14.1121 4.58781 13.8253 4.58781H3.65597C3.6299 4.58781 3.57775 4.58781 3.55167 4.58781L1.04846 1.14695H22.9515L13.6688 13.9928Z" fill="white"/>
</svg>
<p>f</p>
<p>i</p>
{/* <div className="pdiv"> */}
<p>l </p>
<p>t</p>
<p>e</p>
<p>r</p>

</button></Button>
                  {/* <SwipeableDrawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}
                  >
                    {list2(anchor)}
                  </SwipeableDrawer>
                </React.Fragment>
              ))} */}
            </div>
         
         </div>
  
         </div>

        <div className="categories" >
{
   
   list?.map((el)=>{
     return(
      <> 

      {searchParams.get("id") == "famale" && el.gender== "famale" ?
      <Button className="minCategories"  onClick={()=>{
         setCatName(el.title)
         setSearchParams({
            id:gender,
            categories : el.title,
            userId:el.id,
            catName: catName
         })
      }} >
      <div className="minCategories">
       

         <>
          <img src={el.fileUrl} className="minImg" height="70px" width="70px"/>
       <p> {el.title}</p> </>
   
   </div>   </Button>  :null
      }
      {searchParams.get("id") == "male" && el.gender== "male" ?

      <Button className="minCategories" onClick={()=>{
         
         setSearchParams({
            id:gender,
            categories : el.title,
            userId:el.id,
         })
      }} >
         <div className="minCategories">
      <img src={el.fileUrl} height="70px" className="minImg" width="70px"/>
       <p> {el.title}</p> 
      </div></Button> :null
      }</>
     )
   })
}
        </div>
  
           <div className="add">
         <Button variant="text" className="addBtn" onClick={handleOpen}><svg className="addBtnSvg" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
  <g opacity="0.55">
    <path d="M7.88672 1.99707V13.9971" stroke="#1F1617" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

    <path d="M1.88672 7.99707H13.8867" stroke="#1F1617" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg></Button>
         </div>
      </div>
      <div className="nameCategories">
      <ButtonGroup variant="text" aria-label="text button group">

    

         {
            
            categoriesList?.map((el)=>{
               return(
                  <>
               
                  {searchParams.get("userId") == el.userId   ?
                  
   <div className="minNameCategories"> 
<div>




   <div  onClick={()=>{
                     setVal("valsset")

                     setSearchParams({
                        id:gender,
                        categories : el.title,
                        catId:el.id,
                        userId:el.userId,
                        catName:catName  

                     })
                  
                     //  setVal("")
                   }}> 
                 
                   {searchParams.get("categories") == el.title ? 

               <div className="minDiv"  style={style10}>   <Button className="minbtn" onClick={()=>{
              
               }}>   { el.title} </Button> </div>
                
 :
      
   <div className="minDiv" >               <Button className="minbtn">   { el.title}  </Button>  </div>
                   }
              
                 </div>
                 
                    </div>    </div>
 :null
      }
   
                 
             
               
                  
                  </>
               )
            })
         }
         </ButtonGroup> 
         
         
               { searchParams.get("userId") ?  <div className="minAddBtn"><Button variant="text" onClick={minHandleOpen}><svg id="minSvg" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
<g opacity="0.55">
<path d="M7.88672 1.99707V13.9971" stroke="#1F1617" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.88672 7.99707H13.8867" stroke="#1F1617" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg></Button></div> :null }
             
               
            

           
      </div>
      <div className="addImgCategories">
         <Button  variant="contained" sx={{height:"25%", width:"55%"}}  className="addImgCategoriesBtn"onClick={handleOpenCategories}>
            

          +
            </Button>
         </div>

{/* subcategoryList, subcategoryList, subcategoryList, subcategoryList */}
{/* subcategoryList, subcategoryList, subcategoryList, subcategoryList */}
{/* subcategoryList, subcategoryList, subcategoryList, subcategoryList */}
{/* subcategoryList, subcategoryList, subcategoryList, subcategoryList */}
{/* subcategoryList, subcategoryList, subcategoryList, subcategoryList */}
{/* subcategoryList, subcategoryList, subcategoryList, subcategoryList */}
{valBool === false ? 
<div className="subCategory">
 

 {

    result?.map((el, ind)=>{
             
     return( 
     <>{
      //  console.log(subcategoryList , "scl")
     }
     {searchParams.get("catId")  == el.catId && el.price >= min &&  el.price <= max ?<div className="subGlav" key={el.id}>
    
          <div className="subImg">
          <img src={el.fileUrl} alt="" />
        
          </div>
          <div className="subText">
      <div className="ss">{el.title}</div>
             <div className="ss">{el.price}$</div>
</div>   
 </div> :null}
 </>)   
    })
 }

</div> :  <div className="subCategory">
 

 {

    subcategoryList?.map((el)=>{
             
     return( 
     <>{
       console.log(subcategoryList , "scl")
     }
     {searchParams.get("catId")  == el.catId && el.price >= min &&  el.price <= max ?<div className="subGlav" key={el.id}>

          <div className="subImg">
          <img src={el.fileUrl} alt="" />
        
          </div>
          <div className="subText">
      <div className="ss">{el.title}</div>
             <div className="ss">{el.price}$</div>
</div>   
 </div> :null}
 </>)   
    })
 }

</div>}
          {/* <div className="subCategory">
 

            {
       
               result?.map((el)=>{
                        
                return( 
                <>{
                  console.log(subcategoryList , "scl")
                }
                {searchParams.get("catId")  == el.catId && el.price >= min &&  el.price <= max ?<div className="subGlav" key={el.id}>
          
                     <div className="subImg">
                     <img src={el.fileUrl} alt="" />
                   
                     </div>
                     <div className="subText">
                 <div className="ss">{el.title}</div>
                        <div className="ss">{el.price}$</div>
       </div>   
            </div> :null}
            </>)   
               })
            }
          
          </div> */}
      {/* /////////////////////////// Modalss */}
      {/* /////////////////////////// Modalss */}
      {/* /////////////////////////// Modalss */}
      {/* /////////////////////////// Modalss */}
      {/* /////////////////////////// Modalss */}
      {/* /////////////////////////// Modalss */}
      {/* /////////////////////////// Modalss */}
      {/* /////////////////////////// Modalss */}
      {/* /////////////////////////// Modalss */}
      {/* /////////////////////////// Modalss */}
      {/* /////////////////////////// Modalss */}
      {/* /////////////////////////// Modalss */}
      {/* /////////////////////////// Modalss */}
      {/* /////////////////////////// Modalss */}
      <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
    Добавить категория
  <div className="close2" onClick={()=>{
    handleClose()
    }}>
      <Button sx={{ height:"35px", width:"15px"}}>
        <CloseIcon/></Button>
</div>
    <div className="gender10">
         <div >
            <div className="gen">

       
            {
               searchParams.get("id") == "famale" ? 
               <Button variant="contained" onClick={()=>{
                  setSearchParams({
                    id: "famale"
                 })
                          }}>
 
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M3.19275 13.5375L6.06599 12.8196L6.23176 12.1564C5.16951 12.0125 4.13926 11.6902 3.18453 11.2032C3.07811 11.1394 3.01019 11.0272 3.00301 10.9034C2.99549 10.7796 3.04896 10.6598 3.14628 10.5827C3.15978 10.5737 4.50003 9.46762 4.50003 5.63532C4.50003 2.40326 5.25677 0.764386 6.75003 0.764386H6.97503C7.49309 0.208152 8.24431 -0.0698417 9.00002 0.0150247C10.4093 0.0150247 13.5 1.4306 13.5 5.63532C13.5 9.46762 14.8403 10.5737 14.85 10.5812C15.0158 10.7051 15.0497 10.9399 14.9257 11.1057C14.8966 11.1445 14.8602 11.1774 14.8185 11.2024C13.8646 11.694 12.833 12.0175 11.769 12.1586L11.9348 12.8203L14.8072 13.5382C16.6853 14.0051 18.0027 15.6915 18 17.6253C18 17.8322 17.8321 18 17.625 18H0.374987C0.167881 18 -2.47955e-05 17.8322 -2.47955e-05 17.6253C-0.00308418 15.6913 1.31436 14.0044 3.19275 13.5375Z"
                    fill={searchParams.get('gender') === 'woman' ? "#3622e7" : "#939393"}/>
            </svg>
               Famale
                 
                 </Button>:   <Button variant="text" onClick={()=>{
 setSearchParams({
   id: "famale"
})
         }}>

<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M3.19275 13.5375L6.06599 12.8196L6.23176 12.1564C5.16951 12.0125 4.13926 11.6902 3.18453 11.2032C3.07811 11.1394 3.01019 11.0272 3.00301 10.9034C2.99549 10.7796 3.04896 10.6598 3.14628 10.5827C3.15978 10.5737 4.50003 9.46762 4.50003 5.63532C4.50003 2.40326 5.25677 0.764386 6.75003 0.764386H6.97503C7.49309 0.208152 8.24431 -0.0698417 9.00002 0.0150247C10.4093 0.0150247 13.5 1.4306 13.5 5.63532C13.5 9.46762 14.8403 10.5737 14.85 10.5812C15.0158 10.7051 15.0497 10.9399 14.9257 11.1057C14.8966 11.1445 14.8602 11.1774 14.8185 11.2024C13.8646 11.694 12.833 12.0175 11.769 12.1586L11.9348 12.8203L14.8072 13.5382C16.6853 14.0051 18.0027 15.6915 18 17.6253C18 17.8322 17.8321 18 17.625 18H0.374987C0.167881 18 -2.47955e-05 17.8322 -2.47955e-05 17.6253C-0.00308418 15.6913 1.31436 14.0044 3.19275 13.5375Z"
                    fill={searchParams.get('gender') === 'woman' ? "#3622e7" : "#939393"}/>
            </svg>

</Button>
            }
            {/* ////male */}
            {
               searchParams.get("id") == "male" ? 
               <Button variant="contained"  onClick={()=>{
                  setSearchParams({
                    id: "male"
                 })
                          }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
<g clip-path="url(#clip0_312_187)">
<path d="M18.989 17.5343L18.514 15.7343C18.2887 14.861 17.6054 14.1588 16.705 13.875L13.2217 12.7755C12.3722 12.4403 11.9835 11.1443 11.8996 10.6522C12.5469 10.1423 12.9633 9.41685 13.0634 8.62499C13.0491 8.48974 13.0828 8.35383 13.1591 8.23873C13.2826 8.20944 13.3836 8.1257 13.4307 8.01373C13.6586 7.49088 13.8016 6.93837 13.855 6.37499C13.8551 6.34437 13.8512 6.31389 13.8431 6.28425C13.7864 6.06533 13.6506 5.87215 13.4592 5.73824V3.74998C13.4592 2.54173 13.0697 2.04599 12.6596 1.75873C12.5813 1.17675 11.9234 0 9.50089 0C7.35163 0.0819844 5.62909 1.71387 5.54255 3.75001V5.73827C5.35114 5.87218 5.21528 6.06537 5.15858 6.28429C5.15056 6.31392 5.14659 6.34444 5.1467 6.37502C5.19999 6.93868 5.34305 7.49145 5.57105 8.01453C5.60534 8.12053 5.69525 8.20206 5.80855 8.2298C5.85289 8.25078 5.93602 8.35956 5.93602 8.62506C6.03662 9.41917 6.45551 10.1463 7.10611 10.6561C7.02299 11.1473 6.63664 12.4426 5.81096 12.7696L2.29674 13.875C1.3971 14.1588 0.714283 14.8603 0.488584 15.7328L0.0135835 17.5328C-0.040188 17.7336 0.0879879 17.9376 0.299882 17.9885C0.331537 17.9962 0.364082 18 0.396738 18.0001H18.6051C18.8237 18 19.0009 17.8321 19.0008 17.625C19.0008 17.5943 18.9968 17.5639 18.989 17.5343Z" fill="#939393"/>
</g>
<defs>
<clipPath id="clip0_312_187">
<rect width="19" height="18" fill="white"/>
</clipPath>
</defs>
</svg>
                 Male
                 
                 </Button>:   <Button variant="text" onClick={()=>{
 setSearchParams({
   id: "male"
})
         }}>
<svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
<g clip-path="url(#clip0_312_187)">
<path d="M18.989 17.5343L18.514 15.7343C18.2887 14.861 17.6054 14.1588 16.705 13.875L13.2217 12.7755C12.3722 12.4403 11.9835 11.1443 11.8996 10.6522C12.5469 10.1423 12.9633 9.41685 13.0634 8.62499C13.0491 8.48974 13.0828 8.35383 13.1591 8.23873C13.2826 8.20944 13.3836 8.1257 13.4307 8.01373C13.6586 7.49088 13.8016 6.93837 13.855 6.37499C13.8551 6.34437 13.8512 6.31389 13.8431 6.28425C13.7864 6.06533 13.6506 5.87215 13.4592 5.73824V3.74998C13.4592 2.54173 13.0697 2.04599 12.6596 1.75873C12.5813 1.17675 11.9234 0 9.50089 0C7.35163 0.0819844 5.62909 1.71387 5.54255 3.75001V5.73827C5.35114 5.87218 5.21528 6.06537 5.15858 6.28429C5.15056 6.31392 5.14659 6.34444 5.1467 6.37502C5.19999 6.93868 5.34305 7.49145 5.57105 8.01453C5.60534 8.12053 5.69525 8.20206 5.80855 8.2298C5.85289 8.25078 5.93602 8.35956 5.93602 8.62506C6.03662 9.41917 6.45551 10.1463 7.10611 10.6561C7.02299 11.1473 6.63664 12.4426 5.81096 12.7696L2.29674 13.875C1.3971 14.1588 0.714283 14.8603 0.488584 15.7328L0.0135835 17.5328C-0.040188 17.7336 0.0879879 17.9376 0.299882 17.9885C0.331537 17.9962 0.364082 18 0.396738 18.0001H18.6051C18.8237 18 19.0009 17.8321 19.0008 17.625C19.0008 17.5943 18.9968 17.5639 18.989 17.5343Z" fill="#939393"/>
</g>
<defs>
<clipPath id="clip0_312_187">
<rect width="19" height="18" fill="white"/>
</clipPath>
</defs>
</svg>

</Button>
            }
                 </div>
      
 
         </div>
       


         </div>
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
<div className="inp2">
    <TextField id="standard-basic"  {...register('title')} label="categories" variant="standard" />
   {!fileUrl ?   <label htmlFor="filled-basic1">  <div className="divFileUrl" onClick={()=>{
       
    }}> <input id="filled-basic1" label="" type="file" style={{display:"none"}}  onChange={handleFileChange} variant="filled" />

   
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
         <path d="M18.5625 0H3.4375C1.54201 0 0 1.65863 0 3.69748V16.6387C0 18.6775 1.54201 20.3361 3.4375 20.3361H11.6016C11.9294 20.3361 12.2286 20.1356 12.3732 19.8189C12.5175 19.5024 12.4819 19.1249 12.2812 18.8461L10.0334 15.7213L16.2635 7.19745L20.2812 12.353V13.9118C20.2812 14.4223 20.666 14.8361 21.1406 14.8361C21.6153 14.8361 22 14.4223 22 13.9118V3.69748C22 1.65863 20.458 0 18.5625 0V0ZM16.9008 5.13729C16.7345 4.92389 16.4879 4.80203 16.2288 4.8069C15.9698 4.81124 15.7266 4.94086 15.5666 5.15986L8.94875 14.2138L6.69524 11.0814C6.53242 10.855 6.28149 10.7227 6.01562 10.7227C6.01529 10.7227 6.01479 10.7227 6.01445 10.7227C5.74808 10.7231 5.49681 10.8563 5.3345 11.0834L3.44321 13.728C3.15384 14.1327 3.22417 14.713 3.60031 15.0243C3.97662 15.3357 4.51608 15.2599 4.80545 14.8553L6.01764 13.1604L9.84991 18.4874H3.4375C2.48984 18.4874 1.71875 17.658 1.71875 16.6387V3.69748C1.71875 2.67814 2.48984 1.84874 3.4375 1.84874H18.5625C19.5102 1.84874 20.2812 2.67814 20.2812 3.69748V9.47515L16.9008 5.13729ZM6.01562 3.32773C4.59396 3.32773 3.4375 4.57166 3.4375 6.10084C3.4375 7.63002 4.59396 8.87395 6.01562 8.87395C7.43729 8.87395 8.59375 7.63002 8.59375 6.10084C8.59375 4.57166 7.43729 3.32773 6.01562 3.32773ZM6.01562 7.02521C5.54179 7.02521 5.15625 6.61051 5.15625 6.10084C5.15625 5.59117 5.54179 5.17647 6.01562 5.17647C6.48946 5.17647 6.875 5.59117 6.875 6.10084C6.875 6.61051 6.48946 7.02521 6.01562 7.02521ZM22 17.6092C22 18.1198 21.6153 18.5336 21.1406 18.5336H18.7773V21.0756C18.7773 21.5862 18.3926 22 17.918 22C17.4433 22 17.0586 21.5862 17.0586 21.0756V18.5336H14.6953C14.2206 18.5336 13.8359 18.1198 13.8359 17.6092C13.8359 17.0987 14.2206 16.6849 14.6953 16.6849H17.0586V14.1429C17.0586 13.6323 17.4433 13.2185 17.918 13.2185C18.3926 13.2185 18.7773 13.6323 18.7773 14.1429V16.6849H21.1406C21.6153 16.6849 22 17.0987 22 17.6092Z" fill="white"/>
         </svg> 
         <div className="textFileUrl">
            <p>     загрузить</p>
    
          фото 
         </div>
       </div>  </label>:<div>
       <div className="divFileUrl" onClick={()=>{
       
      }}> <img src={fileUrl} width="250px" height="114px" alt="" />
         </div>
         </div>}
  
    <Button variant="contained" onClick={handleSubmit(onSubmit)}>
      Add
      </Button>
   </div> 
   </Typography>
  </Box>
</Modal>



{/* /////  ///  Categories Modal */}
 <Modal
  open={openCategories}
  onClose={handleCloseCategories}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={styleCategories}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
    добавить изделия
    <div className="close1" onClick={()=>{
      setOpenCategories(false);
    }}>
      <Button>
        <CloseIcon/></Button>
</div>
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
<div className="categories5">


         <div className="gender1">
         <div className="famale">
            {
               searchParams.get("id") == "famale" ? 
               <Button variant="contained" onClick={()=>{
                  setGender("famale")

                  setSearchParams({
                    id: "famale"
                 })
                          }}>
    
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M3.19275 13.5375L6.06599 12.8196L6.23176 12.1564C5.16951 12.0125 4.13926 11.6902 3.18453 11.2032C3.07811 11.1394 3.01019 11.0272 3.00301 10.9034C2.99549 10.7796 3.04896 10.6598 3.14628 10.5827C3.15978 10.5737 4.50003 9.46762 4.50003 5.63532C4.50003 2.40326 5.25677 0.764386 6.75003 0.764386H6.97503C7.49309 0.208152 8.24431 -0.0698417 9.00002 0.0150247C10.4093 0.0150247 13.5 1.4306 13.5 5.63532C13.5 9.46762 14.8403 10.5737 14.85 10.5812C15.0158 10.7051 15.0497 10.9399 14.9257 11.1057C14.8966 11.1445 14.8602 11.1774 14.8185 11.2024C13.8646 11.694 12.833 12.0175 11.769 12.1586L11.9348 12.8203L14.8072 13.5382C16.6853 14.0051 18.0027 15.6915 18 17.6253C18 17.8322 17.8321 18 17.625 18H0.374987C0.167881 18 -2.47955e-05 17.8322 -2.47955e-05 17.6253C-0.00308418 15.6913 1.31436 14.0044 3.19275 13.5375Z"
                    fill={searchParams.get('gender') === 'woman' ? "#3622e7" : "#939393"}/>
            </svg>
               Famale
                 
                 </Button>:   <Button variant="text" onClick={()=>{
                  setGender("famale")

 setSearchParams({
   id: "famale"
})
         }}>

<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M3.19275 13.5375L6.06599 12.8196L6.23176 12.1564C5.16951 12.0125 4.13926 11.6902 3.18453 11.2032C3.07811 11.1394 3.01019 11.0272 3.00301 10.9034C2.99549 10.7796 3.04896 10.6598 3.14628 10.5827C3.15978 10.5737 4.50003 9.46762 4.50003 5.63532C4.50003 2.40326 5.25677 0.764386 6.75003 0.764386H6.97503C7.49309 0.208152 8.24431 -0.0698417 9.00002 0.0150247C10.4093 0.0150247 13.5 1.4306 13.5 5.63532C13.5 9.46762 14.8403 10.5737 14.85 10.5812C15.0158 10.7051 15.0497 10.9399 14.9257 11.1057C14.8966 11.1445 14.8602 11.1774 14.8185 11.2024C13.8646 11.694 12.833 12.0175 11.769 12.1586L11.9348 12.8203L14.8072 13.5382C16.6853 14.0051 18.0027 15.6915 18 17.6253C18 17.8322 17.8321 18 17.625 18H0.374987C0.167881 18 -2.47955e-05 17.8322 -2.47955e-05 17.6253C-0.00308418 15.6913 1.31436 14.0044 3.19275 13.5375Z"
                    fill={searchParams.get('gender') === 'woman' ? "#3622e7" : "#939393"}/>
            </svg>

</Button>
            }
            {
               searchParams.get("id") == "male" ? 
               <Button variant="contained" onClick={()=>{
                  setGender("male")
                  setSearchParams({
                    id: "male"
                 })
                          }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
<g clip-path="url(#clip0_312_187)">
<path d="M18.989 17.5343L18.514 15.7343C18.2887 14.861 17.6054 14.1588 16.705 13.875L13.2217 12.7755C12.3722 12.4403 11.9835 11.1443 11.8996 10.6522C12.5469 10.1423 12.9633 9.41685 13.0634 8.62499C13.0491 8.48974 13.0828 8.35383 13.1591 8.23873C13.2826 8.20944 13.3836 8.1257 13.4307 8.01373C13.6586 7.49088 13.8016 6.93837 13.855 6.37499C13.8551 6.34437 13.8512 6.31389 13.8431 6.28425C13.7864 6.06533 13.6506 5.87215 13.4592 5.73824V3.74998C13.4592 2.54173 13.0697 2.04599 12.6596 1.75873C12.5813 1.17675 11.9234 0 9.50089 0C7.35163 0.0819844 5.62909 1.71387 5.54255 3.75001V5.73827C5.35114 5.87218 5.21528 6.06537 5.15858 6.28429C5.15056 6.31392 5.14659 6.34444 5.1467 6.37502C5.19999 6.93868 5.34305 7.49145 5.57105 8.01453C5.60534 8.12053 5.69525 8.20206 5.80855 8.2298C5.85289 8.25078 5.93602 8.35956 5.93602 8.62506C6.03662 9.41917 6.45551 10.1463 7.10611 10.6561C7.02299 11.1473 6.63664 12.4426 5.81096 12.7696L2.29674 13.875C1.3971 14.1588 0.714283 14.8603 0.488584 15.7328L0.0135835 17.5328C-0.040188 17.7336 0.0879879 17.9376 0.299882 17.9885C0.331537 17.9962 0.364082 18 0.396738 18.0001H18.6051C18.8237 18 19.0009 17.8321 19.0008 17.625C19.0008 17.5943 18.9968 17.5639 18.989 17.5343Z" fill="#939393"/>
</g>
<defs>
<clipPath id="clip0_312_187">
<rect width="19" height="18" fill="white"/>
</clipPath>
</defs>
</svg>
                 Male
                 
                 </Button>:   <Button variant="text" onClick={()=>{
                  setGender("male")

 setSearchParams({
   id: "male"
})
         }}>
<svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
<g clip-path="url(#clip0_312_187)">
<path d="M18.989 17.5343L18.514 15.7343C18.2887 14.861 17.6054 14.1588 16.705 13.875L13.2217 12.7755C12.3722 12.4403 11.9835 11.1443 11.8996 10.6522C12.5469 10.1423 12.9633 9.41685 13.0634 8.62499C13.0491 8.48974 13.0828 8.35383 13.1591 8.23873C13.2826 8.20944 13.3836 8.1257 13.4307 8.01373C13.6586 7.49088 13.8016 6.93837 13.855 6.37499C13.8551 6.34437 13.8512 6.31389 13.8431 6.28425C13.7864 6.06533 13.6506 5.87215 13.4592 5.73824V3.74998C13.4592 2.54173 13.0697 2.04599 12.6596 1.75873C12.5813 1.17675 11.9234 0 9.50089 0C7.35163 0.0819844 5.62909 1.71387 5.54255 3.75001V5.73827C5.35114 5.87218 5.21528 6.06537 5.15858 6.28429C5.15056 6.31392 5.14659 6.34444 5.1467 6.37502C5.19999 6.93868 5.34305 7.49145 5.57105 8.01453C5.60534 8.12053 5.69525 8.20206 5.80855 8.2298C5.85289 8.25078 5.93602 8.35956 5.93602 8.62506C6.03662 9.41917 6.45551 10.1463 7.10611 10.6561C7.02299 11.1473 6.63664 12.4426 5.81096 12.7696L2.29674 13.875C1.3971 14.1588 0.714283 14.8603 0.488584 15.7328L0.0135835 17.5328C-0.040188 17.7336 0.0879879 17.9376 0.299882 17.9885C0.331537 17.9962 0.364082 18 0.396738 18.0001H18.6051C18.8237 18 19.0009 17.8321 19.0008 17.625C19.0008 17.5943 18.9968 17.5639 18.989 17.5343Z" fill="#939393"/>
</g>
<defs>
<clipPath id="clip0_312_187">
<rect width="19" height="18" fill="white"/>
</clipPath>
</defs>
</svg>

</Button>
            }
      
 
         </div>

         </div>
  
           <div className="minGlav2">   {
   list?.map((el)=>{
     return(
      <> 

      {searchParams.get("id") == "famale" && el.gender== "famale" ?<div className="minCategories">
         <Button className="btn-cat"  onClick={()=>{
                     setSearchParams({
                        id:gender,
                        categories : el.title,
                        userId:el.id,
                     })
                   }}>
      <img src={el.fileUrl} height="70px" width="70px"/>

       <p> {el.title}</p> 

       </Button>

      </div> :null
      }
     {searchParams.get("id") == "male" && el.gender== "male" ?<div className="minCategories">
         <Button className="btn-cat"  onClick={()=>{
                     setSearchParams({
                        id:gender,
            categories : el.title,
            userId:el.id,
                     })
                   }}>
      <img src={el.fileUrl}  className="listModalImg" height="70px" width="70px"/>
       <p> {el.title}</p> 
       </Button>

      </div> :null
      }</>
     )
   })
}
</div>
</div>
<ButtonGroup variant="text" aria-label="text button group">

        <div className="minGlav">
{
   categoriesList?.map((el)=>{
      return(
         <>
 
         {searchParams.get("userId") == el.userId  ?
    <div className="min2">


         <div  onClick={()=>{ 
            // setVal("valsset111")
              setCatId(el.id)
            setSearchParams({
               id:gender,
               categories : el.title,
               catId:el.id ,
               userId:el.userId
          
     

            })
          }}>  {searchParams.get("categories") == el.title ? 
          
          <div className="minDiv"  style={style10}>   <Button className="minbtn1">   { el.title} </Button> </div>:
             
          <div className="minDiv" >               <Button className="minbtn">   { el.title}  </Button>  </div>
                          } </div>    </div>
 :null
}

        
    {/* 
      
                  {searchParams.get("userId") == el.userId   ?   minbtn1
                  
   <div className="minNameCategories"> 
<div>




   <div  onClick={()=>{
                     setVal("valsset")
                     setSearchParams({
                        id:gender,
                        categories : el.title,
                        catId:el.id,
                        userId:el.userId

                     })
                  
                     //  setVal("")
                   }}> 
                   {searchParams.get("categories") == el.title ? 
   <div className="minDiv"  style={style10}> 
     <Button className="minbtn">   { el.title} </Button> </div>:
      
   <div className="minDiv" >               <Button className="minbtn">   { el.title}  </Button>  </div>
                   }
              
                 </div>
                 
                    </div>    </div>
 :null
      }
   
                 
             
               
                   */}
      
       
         </>
      )
   })
} 
 </div>
</ButtonGroup> 

 <ButtonGroup variant="text" aria-label="text button group">

{/* 
{{{{list error """chjnjel"""}}}}
{
   list?.map((el)=>{
      return(
         <> 
          <div className="nameCategories">

         <div className="glavInp">
          
         <div className="minNameCategories"> 
           {searchParams.get("id") == "famale" && el.gender== "famale" ?<div className="minCategories">

         <Button className="minbtn" sx={ {  
            // border:'1px  solid red'
           }} onClick={()=>{
           
            setSearchParams({
               
               id:gender,

               categories : el.title
            })

          }}>   { el.title}</Button>
</div> :null
}
           {searchParams.get("id") == "male" && el.gender== "male" ?<div className="minCategories">

         <Button className="minbtn" sx={ { 

            // border:'1px  solid red'
           }} onClick={()=>{
            setSearchParams({

               id:gender,
               categories : el.title
            })
          }}>   { el.title}</Button>
         <Button className="minbtn" sx={ {  
            // border:'1px  solid red'
           }} onClick={()=>{
            setSearchParams({
               id:gender,
               categories : el.title
            })
          }}>   { el.title}</Button>
</div> :null
}
 
    
         </div> 
         </div>
         </div>
         </>
      )
   })
} */}
</ButtonGroup>  

<div className="inpCategories">

 <div className="inpCategoriesImg">

 {!fileUrl ?  
      <label htmlFor="filled-basic1" style={{color:"red"}}>
         <div className="divFileUrl" onClick={()=>{
       
      }}> <input id="filled-basic1" label="" type="file" style={{display:"none"}} onChange={handleFileChange} variant="filled" />
       <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">

           <path d="M18.5625 0H3.4375C1.54201 0 0 1.65863 0 3.69748V16.6387C0 18.6775 1.54201 20.3361 3.4375 20.3361H11.6016C11.9294 20.3361 12.2286 20.1356 12.3732 19.8189C12.5175 19.5024 12.4819 19.1249 12.2812 18.8461L10.0334 15.7213L16.2635 7.19745L20.2812 12.353V13.9118C20.2812 14.4223 20.666 14.8361 21.1406 14.8361C21.6153 14.8361 22 14.4223 22 13.9118V3.69748C22 1.65863 20.458 0 18.5625 0V0ZM16.9008 5.13729C16.7345 4.92389 16.4879 4.80203 16.2288 4.8069C15.9698 4.81124 15.7266 4.94086 15.5666 5.15986L8.94875 14.2138L6.69524 11.0814C6.53242 10.855 6.28149 10.7227 6.01562 10.7227C6.01529 10.7227 6.01479 10.7227 6.01445 10.7227C5.74808 10.7231 5.49681 10.8563 5.3345 11.0834L3.44321 13.728C3.15384 14.1327 3.22417 14.713 3.60031 15.0243C3.97662 15.3357 4.51608 15.2599 4.80545 14.8553L6.01764 13.1604L9.84991 18.4874H3.4375C2.48984 18.4874 1.71875 17.658 1.71875 16.6387V3.69748C1.71875 2.67814 2.48984 1.84874 3.4375 1.84874H18.5625C19.5102 1.84874 20.2812 2.67814 20.2812 3.69748V9.47515L16.9008 5.13729ZM6.01562 3.32773C4.59396 3.32773 3.4375 4.57166 3.4375 6.10084C3.4375 7.63002 4.59396 8.87395 6.01562 8.87395C7.43729 8.87395 8.59375 7.63002 8.59375 6.10084C8.59375 4.57166 7.43729 3.32773 6.01562 3.32773ZM6.01562 7.02521C5.54179 7.02521 5.15625 6.61051 5.15625 6.10084C5.15625 5.59117 5.54179 5.17647 6.01562 5.17647C6.48946 5.17647 6.875 5.59117 6.875 6.10084C6.875 6.61051 6.48946 7.02521 6.01562 7.02521ZM22 17.6092C22 18.1198 21.6153 18.5336 21.1406 18.5336H18.7773V21.0756C18.7773 21.5862 18.3926 22 17.918 22C17.4433 22 17.0586 21.5862 17.0586 21.0756V18.5336H14.6953C14.2206 18.5336 13.8359 18.1198 13.8359 17.6092C13.8359 17.0987 14.2206 16.6849 14.6953 16.6849H17.0586V14.1429C17.0586 13.6323 17.4433 13.2185 17.918 13.2185C18.3926 13.2185 18.7773 13.6323 18.7773 14.1429V16.6849H21.1406C21.6153 16.6849 22 17.0987 22 17.6092Z" fill="white"/>
           </svg> 
           <div className="textFileUrl">
              <p>     загрузить</p>
      
            фото 
           </div>
         </div> </label>
  :<div>
         <div className="divFileUrl" onClick={()=>{
         
        }}> <img src={fileUrl} width="174px" height="114px" alt="" />
           </div>
           </div>}
 </div>

  <div className="inpCategoriesInputs">

 <TextField id="standard-basic"{...register('title')}  label=" Vendor Code" onChange={(e)=>{
 
 }} variant="standard" />

 <TextField id="standard-basic" label="Price" onChange={(e)=>{

   setPrice(e.target.value)

 }}  variant="standard" />

 <Button variant="contained"  onClick={handleSubmit(onSubmit)}>Add</Button>
 </div> 
</div>
      </Typography> 

   </Box>
 </Modal> 
{/* //////   patcategories */}


{/* min Modal */}

<Modal
        open={minOpen}
        onClose={minHandleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={minStyle}>
        
          <Typography id="modal-modal-title" variant="h6" component="h2">
        
           {cat}:Add patcategories
           <div className="close3" onClick={()=>{
minHandleClose()
    }}>
      <Button sx={{ height:"35px", width:"15px"}}>
        <CloseIcon/></Button>
</div>
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2, display:"flex" , flexDirection:"column" ,padding:"15px" ,gap:"15px"}}>

          <TextField id="outlined-basic" label="patcategories" variant="outlined" {...register('title')}  sx={{ marginLeft:"10px" }} />

          
          <Button variant="contained" sx ={{borderRadius:"25px"}}  onClick={handleSubmit(onSubmit)}>Add+</Button>
          
          </Typography>

        </Box>

      </Modal>
      </>
      {/* /////////////modal 5 */}
      {/* /////////////modal 5 */}
      {/* /////////////modal 5 */}

      {/* /////////////modal 5 */}
      <Modal

        open={open5}
        onClose={handleClose5}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style5}>
          <Typography id="modal-modal-title" variant="h6" component="h2">


          <div className="close5" onClick={()=>{

 setOpen5(false)
    }}>
      <Button sx={{ height:"35px", width:"15px"}}>

        <CloseIcon/></Button>
</div>
          <Button sx={{"marginLeft":"85px"}} variant="text">Min </Button>
 ---
 <Button variant="text">Max</Button>

          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <>

<Box
  sx={{" margin-top":"35px" }}
  role="presentation"

>

      <Box sx={{ width: 300 }}>
   <Slider
     getAriaLabel={() => 'Temperature range'}

     value={value} 

     onChange={handleChange}
     
     valueLabelDisplay="auto"

     getAriaValueText={valuetext}
     min={0}
     max={maxPrice}
    
    />

 </Box>
 <Button sx={{"marginLeft":"85px"}}  variant="text">{value[0]} </Button>
 ---
 <Button variant="text">{value[1]}</Button>
  <List>
<Box sx={{ width: 300 }}>

 </Box>
  

       
  

  </List>

  <Divider />

   <Button sx={{ width: "80%", "margin-left":"25px" }}         onClick={()=>{
 setOpen5(false)
      setMin(value[0]) 

      setMax(value[1])
      

   }}
 variant="contained">Contained</Button>

</Box>
</>
          </Typography>
        </Box>

      </Modal>
      </>
  

   )

}
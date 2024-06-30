/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode:'class',
  theme: {
    screens:{
      sm:"480px",
      md:"760px",
      lg: "1024px"
    },
    extend: {
      colors:{
        primaryColor:'#010a5e',
        primaryColorLight:"#010d78",
        secondaryColor:"#ffcc00",
        paragraphColor:'#c0c0c0',
        blackColor:'#000',
        whiteColor:'#fff',
        greenColor:"#007936",
        redColor:"#cc3433",
        darkColor:'#000',
        daekColorLight:'#171717',
        lightgrey:'#c0c0c0',
      },
      keyframes:{
        move:{
          "50%":{transform:'translatey(-1rem)'}
        }
      },
      animation:{
        'movingY':'move 2s linear infinite'
      }
      
    },
    container:{
      center:true,
      padding:{
        DEFAULT:'1rem',
        sm:'1.5rem'
      }
    },
    fontFamily:{  
      oswald:['oswald','sans-serif'],
      dmsans:['DM Sans','sans-serif']
    }
  },
  plugins: [],
}
import { StyleSheet } from "react-native";
import { myColors } from "./Colors";

export const styles=StyleSheet.create({
	
	btnBlue:{
		width:88,
		marginTop:5,
		height:72,
		borderRadius:24,
		backgroundColor:myColors.blue,
		justifyContent:"center",
		alignItems:"center",
		margin:0,
		color:"#fff"
	},
	btnDark:{
		width:88,
		marginTop:5,
		height:72,
		borderRadius:24,
		backgroundColor:myColors.btnDark,
		justifyContent:"center",
		alignItems:"center",
		margin:0,
	},
	btnLight:{
		width:88,
		marginTop:5,
		height:72,
		borderRadius:24,
		backgroundColor:myColors.white,
		justifyContent:"center",
		alignItems:"center",
		margin:0,
	},
	btnGray:{
		width:88,
		marginTop:5,
		height:72,
		borderRadius:24,
		backgroundColor:myColors.btnGray,
		justifyContent:"center",
		alignItems:"center",
		margin:0,
	},
	smallTextLight:{
		fontSize:32,
		color:myColors.white
	},
	smallTextDark:{
		fontSize:32,
		color:myColors.black
	},
	row:{
		width:"100%",
		flexDirection:"row",
		display:"flex",
		justifyContent:"space-around"
	},
	viewBotton:{
		position:"absolute",
		bottom:0,
		width:"100%",
		display:"flex",
    	justifyContent: 'center',

	},
	screenFirstNumber:{
		fontSize:96,
		color:myColors.gray,
		fontWeight:"200",
		alignSelf:"flex-end",
	},
	screenSecondNumber:{
		fontSize:40,
		color:myColors.gray,
		fontWeight:"200",
		alignSelf:"flex-end",
	},
	swicth:{
		position:"absolute",
		top:50,
		right:10,
		border:"1px solid #fff"
	},


	


})

import * as React from "react";
import Button from "./Button";
import {View, Text} from "react-native";
import { styles } from "../styles/GlobalStyles";
import {  myColors } from "../styles/Colors";


export default function MyKeyboards(){
	const [firtsNumber, setFirtsNumber]=React.useState("");
	const [secondsNumber, setSecondsNumber]=React.useState("");
	const [operation, setOperation]=React.useState("0");
	const [result, setResult]=React.useState<Number | null>(null);

	const handleNumberPress=(buttonValue:string)=>{
		if(operation==="0" || operation==="error" ){
			setOperation("");
			setOperation(buttonValue);
		}else{
			setOperation(operation+buttonValue);

		}

		setSecondsNumber(firtsNumber);
		setFirtsNumber("");


	}

	const clear=()=>{

		setOperation("0");
		setSecondsNumber("");
		setFirtsNumber("");
		setResult(null);

	}

	const getResult=()=>{
		let operacion;
		// alert(eval("(4+5)/2"))
		try{
			let resultado=eval(operation);
			setOperation(resultado.toString());
		}catch(e){
			setOperation("Error");
		}
		
		
		

		// switch (operation) {
		// 	case "+":
		// 		clear();
		// 		setResult(parseInt(firtsNumber) + parseInt(secondsNumber));
		// 		break;

		// 	case "-":
		// 		clear();
		// 		setResult(parseInt(firtsNumber) - parseInt(secondsNumber));
		// 		break;

		// 	case "*":
		// 		clear();
		// 		setResult(parseInt(firtsNumber) * parseInt(secondsNumber));
		// 		break;

		// 	case "/":
		// 		clear();
		// 		setResult(parseInt(firtsNumber) / parseInt(secondsNumber));
		// 		break;

		// 	default:
		// 		clear();
		// 		setResult(0);
		// 		break;

			
		// }


	}

	

	const firtsNumberDisplay=()=>{
		if(result !== null){
			let estilos={};
			if(result < 99999){
				estilos=[styles.screenFirstNumber, {color: myColors.results}];
			}else{
				estilos=[styles.screenFirstNumber,  {fontSize:50,color: myColors.results}]
			}
			return <Text style={estilos}>{result?.toString()}</Text>
				
		
		}else if(firtsNumber && firtsNumber.length < 6){
			let estilo={};
			estilo=[styles.screenFirstNumber, {fontSize:96}];
			return <Text style={estilo}>{firtsNumber}</Text>;
		}


	}

	let ests={};
	ests=[styles.screenSecondNumber, {fontSize:40}];


	return(
		<View style={styles.viewBotton}>
			<View
			style={{
				height:200,
				width:"90%",
				justifyContent:"flex-end",
				alignSelf:"center"
			}}>

				<Text style={ests}>
					{secondsNumber}
					<Text style={{color:"#485EFC", fontSize:50, fontWeight:"500"}}>{operation}</Text>
					
				</Text>

				{firtsNumberDisplay()}

			</View>
			<View style={styles.row}>
				<Button title="C" isGray onPress={clear}/>
				<Button title="+/-" isGray onPress={()=>handleNumberPress("+/-")}/>
				<Button title="%" isGray onPress={()=>handleNumberPress("%")}/>
				<Button title="/" isBlue onPress={()=>handleNumberPress("/")}/>
			</View>

			<View style={styles.row}>
				<Button title="7" onPress={()=>handleNumberPress("7")}/>
				<Button title="8" onPress={()=>handleNumberPress("8")}/>
				<Button title="9" onPress={()=>handleNumberPress("9")}/>
				<Button title="*" isBlue onPress={()=>handleNumberPress("*")}/>
			</View>
			<View style={styles.row}>
				<Button title="4" onPress={()=>handleNumberPress("4")}/>
				<Button title="5" onPress={()=>handleNumberPress("5")}/>
				<Button title="6" onPress={()=>handleNumberPress("6")}/>
				<Button title="-" isBlue onPress={()=>handleNumberPress("-")}/>
			</View>
			<View style={styles.row}>
				<Button title="1" onPress={()=>handleNumberPress("1")}/>
				<Button title="2" onPress={()=>handleNumberPress("2")}/>
				<Button title="3" onPress={()=>handleNumberPress("3")}/>
				<Button title="+" isBlue onPress={()=>handleNumberPress("+")}/>
			</View>
			<View style={styles.row}>
				<Button title="." onPress={()=>handleNumberPress(".")}/>
				<Button title="0" onPress={()=>handleNumberPress("0")}/>
				<Button title="X" onPress={()=>setFirtsNumber(firtsNumber.slice(0,-1))}/>
				<Button title="=" isBlue onPress={getResult}/>
			</View>
		</View>

	)
}

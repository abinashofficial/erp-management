
import DonutChart from '../../component/chart/DonutChart';
import Box from '@mui/material/Box';
import "./DashBoard.css"






interface Data {
  data: string;
}


const GroundComponentRequest: React.FC<Data> = ({ data }) => {
  // const [myList, setMyList] = useState<string[]>(["Today", "Weak", "Month", "Year"]);
  // const [value, setValue] = useState<string>("");
  // const [isOpen, setIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState('');
  // const navigate = useNavigate();


  // const options = ['Option 1', 'Option 2', 'Option 3'];

  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };

  // const handleOptionSelect = (option: string) => {
  //   setSelectedOption(option);
  //   setIsOpen(false);
  // };



  // const handleChange = (label: string) => (event: SelectChangeEvent<string>) => {
  //   const selectedValue = event.target.value;
  
  // };

  // const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  //   width:60,
  //   height: 6,
  //   borderRadius: 5,
  //   [`&.${linearProgressClasses.colorPrimary}`]: {
  //     backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  //   },
  //   [`& .${linearProgressClasses.bar}`]: {
  //     borderRadius: 5,
  //     backgroundColor: theme.palette.mode === 'light' ? '#C7A96E' : '#C7A96E',
  //   },
  // }));

  // const BorderVerticalProgress = styled(LinearProgress)(({ theme }) => ({
  //   height: 60, // Change width to height
  //   width: 6, // Change height to width
  //   borderRadius: 5,
  //   [`&.${linearProgressClasses.colorPrimary}`]: {
  //     backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  //   },
  //   [`& .${linearProgressClasses.bar}`]: {
  //     borderRadius: 5,
  //     backgroundColor: theme.palette.mode === 'light' ? '#C7A96E' : '#C7A96E',
  //   },
  // }));

  const donutChartData = {
    series: [44, 55, 13],
    labels: ['Approved', 'Rejected', 'Pending'],
    colors: ['#008FFB', '#00E396', '#FEB019']

  };
  
  
  return (

      <Box display="flex"  flexDirection={{ xs: 'column', md: 'row' }} >

      <div style={{
        backgroundColor:"white",
        width:"100%",
        display:"flex",
        justifyContent:"center",
        padding:"50px",
        borderRadius:"20px",
      }}>
      <div >
      <h2>{data}</h2>
      <DonutChart data={donutChartData} />
        </div>
        </div>

      </Box>
  );
}

export default GroundComponentRequest;









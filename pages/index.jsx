      import tw from "tailwind-styled-components"
      import Mapcomponent from './components/Mapcomponent'
      export default function Home() 
      {
        function okay() {
          window.href="www.google.com";
        }
      return (
          <Wrapper>

          <Mapcomponent/>
            
          <ActionCenter >
          
            <Header>
                <UberLogo src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"/>
                <Profile>
                    <Name>Antriksh Mahajan</Name>
                    <Avatar src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                </Profile>
            </Header>
            
  <ActionButtons>

      <ActionButton href="./search">
          <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png"/>
      </ActionButton>

      <ActionButton>
          <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png"/>
        Wheels
      </ActionButton>
      
      <ActionButton>
          <ActionButtonImage onclick="okay()" src="https://i.ibb.co/5RjchBg/uberschedule.png"/>
            Schedule
      </ActionButton>
    
    </ActionButtons>
        <InputField placeholder="Where you want to go ?"></InputField>
          </ActionCenter>
          
          </Wrapper>
        )
      }

      const Header= tw.div`
      bg-white flex justify-between items-center 
      ` 
      const UberLogo= tw.img`
      w-28 
      `
      const Profile= tw.div`
      flex flex-row p-4
      ` 
      const Name= tw.div`
      w-28 font-bold
      `
      const Avatar= tw.img`
      rounded-full w-12 h-12 border border-gray-200 p-px hover:scale-105 transition
      `
      const ActionButtons= tw.a`
      flex justify-center
      `
      const ActionButton= tw.div`
      hover:scale-105 transition hover:bg-blue-200 bg-blue-200 flex text-center bg-gray-200 font-bold  m-5 rounded-xl justify-center items-center flex-col
      ` 
      const Wrapper= tw.div`
      flex flex-col bg-white h-screen
      `
      const Map= tw.div`
      bg-red-200 flex-1
      `  
      const ActionCenter= tw.div`
      flex-1
      `
      const ActionButtonImage = tw.img`
      h-3/5 
      `
      const InputField = tw.input`
      
        flex bg-gray-200  h-14 rounded w-full hover:bg-blue-200  
      `
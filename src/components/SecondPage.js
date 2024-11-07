function SecondPage(){
    return(
        <div>
        <Navbar title="Ushereel" profile="Profile" 
    savedPosts="Saved Posts" analytics="Analytics" 
    setting="Settings" subs="Subscription"/>
   
    <div className='container'>
      <TextForm heading="Post your Startup reels here"/>
    </div>
    </div>
    )
}
export default SecondPage;
import Header from '../../components/Header';
import Layout from '../../components/Layout';




import img from '../../assets/bg3.jpg';



const HomePage = ( { onChangePage } ) => {
    const handleClickButton = (page) => {
      
        onChangePage && onChangePage(page);
    }

  return (
			<>
					<Header
						title="Pokemon Game"
						descr="This is simple triple card game" 
						onClickButton={handleClickButton}
					/>
					<Layout 
							id="rules"
							title="This is First Layout"
							urlBg={img}
							>
							<p> 

								In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.


								Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.

								
							</p>
					</Layout>
					<Layout 
						id="cards"
						title="Cards"
						colorBg='#2dd42d'  
					>
				
					</Layout>
					<Layout
						id="about" 
						title="This is First Layout" 
						urlBg={img}
					>
						<p>
						To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared.

						</p>
					</Layout>
			</>
  );
}

export default HomePage;

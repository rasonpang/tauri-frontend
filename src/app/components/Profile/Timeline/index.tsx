import styles from "./style.module.css";

const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quisquam deleniti commodi sit fuga unde officiis at porro minima! Quisquam asperiores neque temporibus unde fugiat ducimus quae iure? Odio, deleniti.
Sapiente ex quisquam facilis, aliquid earum iure nisi beatae qui sunt facere veniam quos, adipisci assumenda accusantium, quibusdam architecto quo ab porro cumque quae dignissimos laudantium eum maxime reiciendis? Perspiciatis!
Nesciunt illum molestiae necessitatibus sed cum ipsum, sit atque ut ad tenetur iusto ratione, accusamus amet optio laudantium sapiente sequi adipisci, at quos? Vitae libero, ipsum possimus numquam quasi itaque!
Nesciunt quos recusandae eum quae deleniti vitae quisquam ea voluptas nemo dolores? Ipsa accusamus officia magni quae possimus cupiditate, ex, pariatur veniam quas consequuntur recusandae, tenetur corporis repellendus enim! Ex.
Nobis, dolores nemo ratione molestiae asperiores laudantium accusantium nam doloribus illum non optio, eos error atque labore iste mollitia dolor aliquid fugiat vitae vero nihil? Nulla laborum excepturi omnis magnam.
Odio vel provident veritatis dignissimos nulla velit obcaecati, quis ad maiores quia adipisci impedit molestiae culpa facilis quibusdam nihil exercitationem cumque quasi ducimus, rem nemo corporis laborum eligendi sint. Quidem.
Placeat, similique ducimus. Dolores provident, blanditiis et quas nobis facere perspiciatis natus ad recusandae maiores maxime iure laborum quis explicabo, officia quisquam ullam. Facere tenetur explicabo delectus quo corrupti eveniet!
Non excepturi aut id repellendus ad. Nihil maiores, sunt repudiandae animi eum harum nulla recusandae minus dolore? Iure, in accusamus dolorum eius nesciunt, rem id iste, nulla facere tempore voluptatum?
Laudantium, perspiciatis ullam, debitis nostrum quia nemo maxime magni iusto cumque similique odio ipsum architecto? Ex quo provident repellendus, assumenda ab corrupti quod ut nemo animi explicabo nostrum saepe laboriosam.
Necessitatibus ut accusamus cupiditate recusandae dolor sequi, eius illo veniam quisquam impedit, voluptatem, eveniet vel at eligendi repudiandae reprehenderit natus. Suscipit, ducimus nobis numquam esse tenetur voluptate excepturi ab magni?`;

const Timeline = () => {
	return (
		<div class={styles.container}>
			<div class={styles.title}>A</div>
			<div class={styles.time}>
				<div>{lorem}</div>
			</div>
		</div>
	);
};

export default Timeline;

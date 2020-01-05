import React, { Component } from "react";

import { SHOP_DATA } from "./shop.data";
import "./shop.styles.scss";
import { CollectionPreview } from "../../components/preview-collection/preview-collection.component";

export default class ShopPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collections: SHOP_DATA
		};
	}

	render() {
		return (
			<div>
				<h1>SHOP PAGE</h1>
				{this.state.collections.map(collection => (
					<CollectionPreview key={collection.id} collection={collection} />
				))}
			</div>
		);
	}
}

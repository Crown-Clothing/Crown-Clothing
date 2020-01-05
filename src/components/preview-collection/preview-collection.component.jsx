import React from "react";

import "./preview-collection.styles.scss";

export const CollectionPreview = props => {
	return (
		<div className="collection-preview">
			<h1 className="title">{props.collection.title}</h1>
			<div className="preview">
				{props.collection.items
					.filter((item, idx) => idx < 4)
					.map(item => (
						<div key={item.id}>{item.name}</div>
					))}
			</div>
		</div>
	);
};

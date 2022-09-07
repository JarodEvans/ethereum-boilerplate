import React, { useState } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import { Table, Tag, Space } from "antd";
import moment from "moment";

const styles = {
    table: {
        margin: "0 auto",
        width: "1000px",
    },
};

function NFTMarketTransactions(){

    const queryMarketItems = useMoralisQuery("CreatedMarketItems");
    const fetchMarketItems = JSON.parse(
        JSON.stringify(queryMarketItems.data, [
          "updatedAt",
          "price",
          "nftContract",
          "itemId",
          "sold",
          "tokenId",
          "seller",
          "owner",
        ])
    )

    const data = fetchMarketItems?.map((item, index) => ({
        key: index,
        date: moment(item.updatedAt).format("DD-MM-YYYY HH:mm"),
        collection: item.nftContract,
        item: item.tokenId,
        tags: [item.seller, item.sold],
        price: item.price / ("1e" + 18)
    }));

    const columns = [
        {
            title:"Date",
            dataIndex: "date",
            key: "date",
        },
        {
            title:"Item",
            key: "item",
            dataIndex: "item",
        },
        {
            title:"Collection",
            key: "collection",
            dataIndex: "collection",
        },
        {
            title:"Transaction Status",
            key: "tags",
            dataIndex: "tags",
        },
        {
            title:"Price",
            key: "price",
            dataIndex: "price",
        }
    ];

    return(
        <>
        <div>
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
        </>
    )
}

export default NFTMarketTransactions;
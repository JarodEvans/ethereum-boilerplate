import { Select } from "antd";
import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import { getCollectionsByChain } from "helpers/collections";
import { useMoralis } from "react-moralis";

function SearchCollections(){
    const {Option} = Select;
    const {chainId} = useMoralisDapp();
    const NFTCollections = getCollectionsByChain(chainId);

    return(
        <>
            <Select
                showSearch
                style={{
                    width: "1000px",
                    marginLeft: "20px"
                }}
                placeholder="Find a collection"
                optionFilterProps="children"
            >
                {NFTCollections &&
                    NFTCollections.map((collection, i) =>
                        <Option value={collection.addrs} key={i}>
                            {collection.name}
                        </Option>)}
            </Select>
        </>
    )

}

export default SearchCollections;
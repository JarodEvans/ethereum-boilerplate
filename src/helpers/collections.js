export const networkCollections = {
    "0x1": [
        {
            image: 
            "https://lh3.googleusercontent.com/LIov33kogXOK4XZd2ESj29sqm_Hww5JSd07AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8=s0",
            name: "Cool Cats NFT",
            addrs: "0x1A92f7381B9F03921564a437210bB9396471050C",
        },
        {
            image: 
            "https://lh3.googleusercontent.com/LIov33kogXOK4XZd2ESj29sqm_Hww5JSd07AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8=s0",
            name: "CryptoPunks",
            addrs: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
        },
    ],
};

export const getCollectionsByChain = (chain) => networkCollections[chain];
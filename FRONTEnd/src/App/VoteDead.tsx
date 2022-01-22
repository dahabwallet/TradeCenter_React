import React, { useState } from "react";
import Web3 from "web3";
import BN from "bn.js";
import { Button, Form } from "semantic-ui-react";
import { useWeb3Context } from "../contexts/Web3";
import useAsync from "../components/useAsync";
import { VoteDead } from "../api/TODWallet";

interface VoteDeadParams {
  web3: Web3;
  account: string;
}

const VoteDeadForm: React.FC = () => {
  const {
    state: { web3, account },
  } = useWeb3Context();

  const [input, setInput] = useState("");
  const { pending, call } = useAsync<VoteDeadParams, void>(
    ({ web3, account }) => VoteDead(web3,account)
  );

async function handleClick(e){
    e.preventDefault();
    console.log("clicked!")
    //const web3 = Web3; 
    await VoteDead(web3,account)

}

  

  return (
   
     
      <Button onClick={handleClick}   disabled={pending} loading={pending}>
        The Owner Passed Away :(
      </Button>
  
  );
};

export default VoteDeadForm;

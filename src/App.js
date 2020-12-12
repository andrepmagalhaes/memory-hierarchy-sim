import './App.css'
import styled, { css } from 'styled-components'
import utilities from './utilities'
// import {remote} from 'electron'
import script from "./scripts/script.js"


const WrapperStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0.5vw;
  height: 85.28vh;
  width: 100vw;
`

const TitleStyle = styled.h4`
  text-align: center;
  margin: 0;
  padding: 2vh;
`

const SubTitleStyle = styled.p`
  text-align: center;
  margin: 0;
  font-weight: bold;
  font-size: 1rem;
  border: 1px solid #454d55;
  border-left: none;
  border-right: none;
`

const UtilStyle = styled.div`
  display: grid;
  grid-template-rows: 
`

const ButtonStyle = styled.button`
  margin: 0 1rem;
`

const cache_gen_l1 = () =>{
  const l1 = [];

  const rows =[];
  for(let i = 0; i < 4 ; i++)
  {
    rows.push(
    <tr>
      <th scope="row">{i}</th>
      <td className={`l1_v`}>0</td>
      <td className={`l1_lru`}>0</td>
      <td className={`l1_e`}>0</td>
      <td className={`l1_tg`}>0</td>
      <td className={`l1_w0`}>0</td>
      <td className={`l1_w1`}>0</td>
      <td className={`l1_w2`}>0</td>
      <td className={`l1_w3`}>0</td>
    </tr>
    )
  }

  for(let i = 0 ; i<2 ; i++)
  {
    l1.push(
      <div className={`l1_via${i}`}>

        <SubTitleStyle className="table-dark">Via {i}</SubTitleStyle>
        <table class="table table-dark" style={{marginBottom: "0"}}>
          <thead>
            <tr>
              <th scope="col">C</th>
              <th>V</th>
              <th>LRU</th>
              <th>E</th>
              <th>TG</th>
              <th scope="col">W0</th>
              <th scope="col">W1</th>
              <th scope="col">W2</th>
              <th scope="col">W3</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>

      </div>
    )
  }

  return l1;
}

const cache_gen_l2 = () =>{
  const l2 = [];

  const rows =[];
  for(let i = 0; i < 8 ; i++)
  {
    rows.push(
    <tr>
      <th scope="row">{i}</th>
      <td className={`l2_v`}>0</td>
      <td className={`l2_lru`}>0</td>
      <td className={`l2_e`}>0</td>
      <td className={`l2_tg`}>0</td>
      <td className={`l2_w0`}>0</td>
      <td className={`l2_w1`}>0</td>
      <td className={`l2_w2`}>0</td>
      <td className={`l2_w3`}>0</td>
    </tr>
    )
  }

  for(let i = 0 ; i<4 ; i++)
  {
    l2.push(
      <div class={`l2_via${i}`}>

        <SubTitleStyle className="table-dark">Via {i}</SubTitleStyle>
        <table class="table table-dark" style={{marginBottom: "0"}}>
          <thead>
            <tr>
              <th scope="col">C</th>
              <th>V</th>
              <th>LRU</th>
              <th>E</th>
              <th>TG</th>
              <th scope="col">W0</th>
              <th scope="col">W1</th>
              <th scope="col">W2</th>
              <th scope="col">W3</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>

      </div>
    )
  }

  return l2;
}

const tabela_pag_gen = () =>{
  const tab = []
  let pag_counter = 0;

  for(let i = 21 ; i < 2048 ; i=i+4)
  {
    tab.push(
      <div class={`mem_pagina`}>

        <SubTitleStyle className="table-dark">Pagina {pag_counter}</SubTitleStyle>
        <table class="table table-dark" style={{marginBottom: "0"}}>
          <thead>
            <th>V</th>
            <th>M</th>
            <th>R</th>
            <th>E</th>
          </thead>
          <tbody>
            <td className={`tp_validade`}>0</td>
            <td className={`tp_modificacao`}>0</td>
            <td className={`tp_referencia`}>0</td>
            <td className={`tp_endereco`}>{utilities.dec2hex(i)}</td>
          </tbody>
        </table>

      </div>
    )
    pag_counter++
  }

  return tab
}

const main_mem_gen = () => {
  const mem = [];

  for(let i = 0 ; i < 8192 ; i++)
  {
    mem.push(
      <tbody>
        <th>{utilities.dec2hex(i)}</th>
        <td className='mem'>0</td>
      </tbody>
    )
  }
  

  return(
    <table className="table table-dark" style={{marginBottom: "0"}}>
      <thead>
        <th>Endereço</th>
        <th>Dado</th>
      </thead>
      {mem}
    </table>
  )
}

const tlb_gen = () => {
  const tlb =[]

  for(let i = 0 ; i<4 ; i++)
  {
    tlb.push(
      <div class={`mem_pagina_${i}`}>

        <SubTitleStyle className="table-dark">Pagina {i}</SubTitleStyle>
        <table class="table table-dark" style={{marginBottom: "0"}}>
          <thead>
            <th>V</th>
            <th>M</th>
            <th>R</th>
            <th>TG</th>
            <th>E</th>
          </thead>
          <tbody>
            <td className={`tlb_validade`}>0</td>
            <td className={`tlb_modificacao`}>0</td>
            <td className={`tlb_referencia`}>0</td>
            <td className={`tlb_tag`}>0</td>
            <td className={`tlb_endereco`}>{utilities.dec2hex(0)}</td>
          </tbody>
        </table>

      </div>
    )
  }

  return tlb
}

const buffer_gen_l1 = () => {
  const aux =[]

  for(let i = 0 ; i < 4 ; i++)
  {
    aux.push(
      <tbody>
        <th>{i}</th>
        <td className={`buffer_l1_l2`}>0</td>
      </tbody>
    )
  }


  return (
    <div>

        <table class="table table-dark" style={{marginBottom: "0"}}>
          {aux}
        </table>

    </div>
  )
}

const buffer_gen_l2 = () => {
  const aux =[]

  for(let i = 0 ; i < 4 ; i++)
  {
    aux.push(
      <tbody>
        <th>{i}</th>
        <td className={`buffer_l2_mp`}>0</td>
      </tbody>
    )
  }


  return (
    <div>
        <table class="table table-dark" style={{marginBottom: "0"}}>
          {aux}
        </table>

      </div>
  )
}

const num_faults_gen = () => {

  return (
    <div>
        <table class="table table-dark" style={{marginBottom: "0"}}>
          <tbody>
            <tr>
              <th>L1</th>
              <td className="num_faults_l1">0</td>
            </tr>
            <tr>
              <th>L2</th>
              <td className="num_faults_l2">0</td>
            </tr>
            <tr>
              <th>TLB</th>
              <td className="num_faults_tlb">0</td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

function App() {
  const vias_l1 = cache_gen_l1();
  const vias_l2 = cache_gen_l2();
  const tabela_paginas = tabela_pag_gen();
  const main_mem = main_mem_gen();
  const tlb = tlb_gen();
  const buffer_l1 = buffer_gen_l1();
  const buffer_l2 = buffer_gen_l2();
  const num_faults = num_faults_gen();

  return (
    <div className="App" style={{display:"grid", gridTemplateRows:"2.5fr 0.5fr", gap:"1rem", maxHeight:"100vh"}}>
      <WrapperStyle>

      <div class="cache_l1 overflow-auto" style={{maxWidth: "100%", display:"grid", gridTemplateRows:"2fr 1fr", gap:"1rem"}}>

        <div className=" overflow-auto">
          <TitleStyle className="table-dark ">Cache L1</TitleStyle>
          {vias_l1}
        </div>

        <div className=" overflow-auto">
          <TitleStyle className="table-dark ">Processador</TitleStyle>
          <table class="table table-dark" style={{marginBottom: "0"}}>
            <tbody>
              <th>PC</th>
              <td className={`processador_pc`}>0</td>
            </tbody>
            <tbody>
              <th>R1</th>
              <td className={`processador_r1`}>0</td>
            </tbody>
            <tbody>
              <th>R2</th>
              <td className={`processador_r2`}>0</td>
            </tbody>
          </table>
        </div>
        

      </div>
      
      <div class="cache_l2 overflow-auto" style={{maxWidth: "100%"}}>
        
        <div className=" overflow-auto">
          <TitleStyle className="table-dark">Cache L2</TitleStyle>
          {vias_l2}
        </div>
      </div>

      <div className="util overflow-auto" style={{maxWidth: "100%", display: "grid", gridTemplateRows: "1fr 1fr 1fr", gap: "1rem"}}>

        <div className="tlb overflow-auto">
          <TitleStyle className="table-dark">TLB</TitleStyle>
          {tlb}
        </div>

        <div className="tabela_paginas overflow-auto">
          <TitleStyle className="table-dark">Tabela de Paginas</TitleStyle>
          {tabela_paginas}
        </div>

        <div className=" overflow-auto">
          <TitleStyle className="table-dark">Buffer WT</TitleStyle>
            {buffer_l1}
        </div>

      </div>

      <div className="main_mem overflow-auto" style={{maxWidth: "100%", display: "grid", gridTemplateRows: "2.5fr 0.5fr", gap: "1rem"}}>

        <div className=" overflow-auto">
          <TitleStyle className="table-dark">Memoria Principal</TitleStyle>
          {main_mem}
        </div>
        
        <div className="fail_num overflow-auto" style={{height:"100%"}}>
          <TitleStyle className="table-dark">Numero de Falhas</TitleStyle>
            {num_faults}
        </div>

      </div>
      

      </WrapperStyle>

      <div className="menu" style={{height:"100%", display:"flex", justifyContent:"center"}}>

          <div style={{display:"flex"}}>
          <ButtonStyle onClick={script.next} type="button" className="btn btn-primary prox_passo" style={{height:"2.3rem"}}>Proximo Passo</ButtonStyle>
          
          
          <div style={{display:"grid", gridTemplateRows:"1fr 1fr 1fr", gap:"0.2rem"}}>
            
          <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="wt" value="option1" checked></input>
            <label class="form-check-label" for="exampleRadios1" style={{color:"white"}}>
              WT
            </label>
            
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="wb" value="option2"></input>
            <label class="form-check-label" for="exampleRadios2" style={{color:"white"}}>
              WB
            </label>
          </div>

            <ButtonStyle onClick={script.open_file} type="button" className="btn btn-secondary show-open-dialog">Inserir Arquivo</ButtonStyle>
            <ButtonStyle type="button" className="btn btn-danger reset">Reiniciar</ButtonStyle>
          </div>
          </div>  
      </div>
    </div>
  );
}

export default App;

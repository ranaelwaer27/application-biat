import "./inscri.css";
function Inscr() {
  return (
    <div className="FormInscrs">
      <div className="Form-text">Inscription</div>
       <div className="Form-saisie">
       <form>
            <label>
               Nom :
              <input type="text" name="" placeholder="entre votre nom" />
              Prénom :
               <input type="text" name="" placeholder="entre votre prénom" />
              Address E-mail :
               <input type="text" name="" placeholder="entre votre address" />
              Mot de passe :
               <input type="password" name="" placeholder="entre votre mot de passe" />
              
               
               
            </label>
            <input type="submit" value="S'inscrire" className="btninscr"/>
            <span>vous avez inscris</span> ?&nbsp;<a href="#">connectez-vous</a>
              
       </form>
       

                
         

       </div>
    </div>
  );
}
export default Inscr;
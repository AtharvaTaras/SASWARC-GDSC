<script>

          let pls = 15;  //Plastic per kg 
          let crd = 15;  //Cardboard per kg 
          let ppr = 20;  //Paper per kg 

          var type = window.prompt("Select waste type 1 for Platic, 2 for Cardborad, 3 for Paper? ");
          var wght = window.prompt("Enter weight (note that this will be calculated automatically in the machine) ");
          var phon = window.prompt("Enter phone number associated with your account ")

          if (type == '1') {
              var amt = pls * wght;
          }

          else if (type == '2') {
              var amt = crd * wght;
          }

          else if (type == '3') {
              var amt = ppr * wght;
          }
        
//to be fixed!!!
          alert(amt, "added to your account", phon)


</script> 

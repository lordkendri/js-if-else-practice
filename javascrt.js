dineroCofla = prompt("Dinero Cofla: ");
dineroRoberto = prompt("Dinero Roberto: ");
dineroPedro = prompt("Dinero Pedro: ");

dineroCofla = parseFloat(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla <1){
    alert("Cofla, Compra el helado de agua");
    alert("Cofla, te sobra " + (dineroCofla - 0.6));
}
else if (dineroCofla >= 1 && dineroCofla <1.6){
    alert("Cofla, Compra el helado de crema");
    alert("Cofla, te sobra " + (dineroCofla - 1));
}
else if (dineroCofla >= 1.6 && dineroCofla <1.7){
    alert("Cofla, Compra el helado de chocolate");
    alert("Cofla, te sobra " + (dineroCofla - 1.6));
}
else if (dineroCofla >= 1.7 && dineroCofla <1.8){
    alert("Cofla, Compra el helado de chocolate con crema");
    alert("Cofla, te sobra " + (dineroCofla - 1.7));
}
else if (dineroCofla >= 1.8 && dineroCofla <2.9){
    alert("Cofla, Compra el helado de chocolate de mani con crema");
    alert("Cofla, te sobra " + (dineroCofla - 1.8));
}
else if (dineroCofla >= 2.9){
    alert("Cofla, Compra el helado premium o el pote de 1/4kg");
    alert("Cofla, te sobra " + (dineroCofla - 2.9));
} else{
    alert("Cofla, no cuentas con dinero suficiente")
}


if (dineroRoberto >= 0.6 && dineroRoberto <1){
    alert("Roberto, Compra el helado de agua")
}
else if (dineroRoberto >= 1 && dineroRoberto <1.6){
    alert("Roberto, Compra el helado de crema")
}
else if (dineroRoberto >= 1.6 && dineroRoberto <1.7){
    alert("Roberto, Compra el helado de chocolate")
}
else if (dineroRoberto >= 1.7 && dineroRoberto <1.8){
    alert("Roberto, Compra el helado de chocolate con crema")
}
else if (dineroRoberto >= 1.8 && dineroRoberto <2.9){
    alert("Roberto, Compra el helado de chocolate de mani con crema")
}
else if (dineroRoberto >= 2.9){
    alert("Roberto, Compra el helado premium o el pote de 1/4kg")
} else{
    alert("Roberto, no cuentas con dinero suficiente")
}

if (dineroPedro >= 0.6 && dineroPedro <1){
    alert("Pedro, Compra el helado de agua")
}
else if (dineroPedro >= 1 && dineroPedro <1.6){
    alert("Pedro, Compra el helado de crema")
}
else if (dineroPedro >= 1.6 && dineroPedro <1.7){
    alert("Pedro, Compra el helado de chocolate")
}
else if (dineroPedro >= 1.7 && dineroPedro <1.8){
    alert("Pedro, Compra el helado de chocolate con crema")
}
else if (dineroPedro >= 1.8 && dineroPedro <2.9){
    alert("Pedro, Compra el helado de chocolate de mani con crema")
}
else if (dineroPedro >= 2.9){
    alert("Pedro, Compra el helado premium o el pote de 1/4kg")
} else{
    alert("Pedro, no cuentas con dinero suficiente")
}


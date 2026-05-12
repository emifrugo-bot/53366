import PedidoVisitor from "./generated/PedidoVisitor.js";

export class CustomPedidoVisitor extends PedidoVisitor {

    visitPedido(ctx) {
        const nombrePedido = ctx.ID().getText();

        console.log(`Pedido: ${nombrePedido}`);

        let total = 0;

        for (const itemCtx of ctx.item()) {
            const item = this.visit(itemCtx);
            total += item.subtotal;
        }

        console.log(`Total del pedido: $${total}`);

        return total;
    }

    visitItem(ctx) {
        const producto = ctx.producto().getText();
        const cantidad = Number(ctx.cantidad().getText());
        const precio = Number(ctx.precio().getText());

        const subtotal = cantidad * precio;

        console.log(`${producto}: ${cantidad} x $${precio} = $${subtotal}`);

        return {
            producto,
            cantidad,
            precio,
            subtotal
        };
    }
}
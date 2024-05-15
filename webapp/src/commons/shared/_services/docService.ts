
export class DocService {
    static  validateCPF(value: string): boolean {
        const cpf = value.replace(/[^\d]+/g, '');
        if (cpf === '' || cpf.length !== 11) return false;
        let add = 0;
        for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
        let rev = 11 - (add % 11);
        if (rev === 10 || rev === 11) rev = 0;
        if (rev !== parseInt(cpf.charAt(9))) return false;
        add = 0;
        for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
        rev = 11 - (add % 11);
        if (rev === 10 || rev === 11) rev = 0;
        if (rev !== parseInt(cpf.charAt(10))) return false;
        return true;
    }

    static formatCPFMask(cpf: string) {
        // Remove todos os caracteres não numéricos
        const cleanedCPF = cpf.replace(/\D/g, '');
      
        // Aplica a máscara de formatação
        const formattedCPF = cleanedCPF.replace(
          /(\d{3})(\d{3})(\d{3})(\d{2})/,
          '$1.$2.$3-$4'
        );
      
        return formattedCPF;
      }
}
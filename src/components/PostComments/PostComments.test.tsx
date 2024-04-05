import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar dois comentários', () => {
        render(<PostComment/>);

        fireEvent.change(screen.getByTestId('ta-comentario'), {
            target: {
                value: 'Primeiro comentário de teste',
            }
        });
        fireEvent.click(screen.getByTestId('btn-comentario'));
    
        fireEvent.change(screen.getByTestId('ta-comentario'), {
            target: {
                value: 'Segundo comentário de teste',
            }
        });
        fireEvent.click(screen.getByTestId('btn-comentario'));

        expect(screen.getAllByTestId('li-comentario')).toHaveLength(2);
    });
});
import { Book } from '@/domain/book'
import { BookRepository } from '@/infra/repositories/ports/bookRepository'
import { BookNotFoundError } from '../error'
import { UseCase } from '../ports/usecase'

export class DeleteBook implements UseCase<Book> {
  constructor (private readonly bookRepository: BookRepository) {}

  async execute (id: string): Promise<string> {
    const book = await this.bookRepository.listById(id)
    if (!book) {
      throw new BookNotFoundError('Book id not found')
    }
    await this.bookRepository.delete(id)
    return `Book with id ${book.id} deleted`
  }
}

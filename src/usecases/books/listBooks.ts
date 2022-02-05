import { Book } from '@/domain/book'
import { BookRepository } from '@/repositories/ports/bookRepository'
import { UseCase } from '../ports/usecase'

export class ListBooks implements UseCase<Book[]> {
  constructor (
    private readonly bookRepository: BookRepository
  ) {}

  async execute (): Promise<Book[]> {
    return await this.bookRepository.list()
  }
}
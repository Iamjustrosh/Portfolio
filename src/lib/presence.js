/**
 * Converts the snake_case database row to camelCase.
 */
export function rowToPresence(row) {
  return {
    id: row.id,
    userId: row.user_id,
    status: row.status,
    workspace: row.workspace,
    folder: row.folder,
    file: row.file,
    language: row.language,
    cursorLine: row.cursor_line,
    cursorColumn: row.cursor_column,
    sessionStartedAt: row.session_started_at,
    idleSince: row.idle_since,
    updatedAt: row.updated_at,
  };
}